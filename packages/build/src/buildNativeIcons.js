const fs = require('fs-extra');
const globby = require('globby');
const path = require('path');
const cheerio = require('cheerio');
const css = require('css');
const prettier = require('prettier');
const _ = require('lodash');
const componentTemplate = require('./componentTemplate');
const nativeComponents = require('./nativeComponents');
const extendCheerio = require('./extendCheerio');
const upperCamel = string => _.upperFirst(_.camelCase(string));

const extraneousAttrs = [ 'xmlns', 'class' ];
const nativeSvgProps = nativeComponents.Svg;

const ensureAttrsMatchProps = (name, el) => {
  const nativeProps = nativeComponents[el.tagName];

  if (nativeProps === undefined) {
    throw new Error(`Can't build ${name}: ${el.tagName} does not have a native version`);
  }

  Object.keys(el.attribs).forEach(x => {
    if (!nativeProps.includes(x)) {
      throw new Error(`Can't build ${name}: ${el.tagName} does not have a native prop ${x}`);
    }
  });
};

const wrapChildrenInGroup = ($, colorProp) => {
  const svgElement = $('Svg')[0];
  const svgSelection = $(svgElement);

  const extraSvgProps = _.difference(Object.keys(svgElement.attribs), nativeSvgProps);

  let propString = extraSvgProps.reduce((propString, attribute) => {
    propString += `${attribute}="${$('Svg').attr(attribute)}" `;
    return propString;
  }, '');

  if (!extraSvgProps.includes(colorProp)) {
    propString += ` ${colorProp}={color}`
  }

  propString += ' otherProps="..."';

  svgSelection.children().wrapAll(`<G ${propString}></G>`);
  extraSvgProps.forEach(attr => $('Svg').removeAttr(attr));
};

const convertToNative = ($, el, colorProp) => {
  el.tagName = _.upperFirst(el.tagName);

  // First pass, transform attributes
  Object.keys(el.attribs).forEach(x => {
    if (x.includes('-')) {
      $(el)
        .attr(_.camelCase(x), el.attribs[x])
        .removeAttr(x);
    }

    if (x === colorProp) {
      $(el).attr(x, '{color}');
    }

    if (extraneousAttrs.includes(x)) {
      $(el).removeAttr(x);
    }

    // Remove Id's from all components that aren't supposed to have one.
    if (x === 'id' && !nativeComponents[el.tagName].includes('id')) {
      $(el).removeAttr(x);
    }
  });
};

const spreadStylesToProperties = ($) => {
  const styles = $('style').contents().text();
  const { stylesheet } = css.parse(styles);

  stylesheet.rules.forEach(({ selectors, declarations }) => {
    declarations.forEach(({ property, value}) => {
      $(selectors.join(' ')).attr(property, value)
    });
  });

  $('style').remove();
};

const buildNativeIcons = async (opts) => {
  const { svgGlob, colorProp = 'fill', outputDir, nameMap } = opts;

  const svgPaths = await globby(svgGlob);

  const getComponentName = (filePath) => {
    const name = upperCamel(path.basename(filePath, '.svg'));
    return nameMap ? nameMap(name) : name;
  };

  await fs.ensureDir(outputDir);

  await Promise.all(svgPaths.map(async filePath => {
    const svg = await fs.readFile(filePath, 'utf8');
    const componentName = getComponentName(filePath);
    const outputPath = path.join(outputDir, `${componentName}.js`);
    const $ = cheerio.load(svg, {
      xmlMode: true
    });

    extendCheerio($);

    $('svg')
      .attr('height', '{size}')
      .attr('width', '{size}');

    spreadStylesToProperties($);

    $('*').each((index, el) => {
      convertToNative($, el, colorProp);
    });

    wrapChildrenInGroup($, colorProp);

    $('*').each((index, el) => {
      ensureAttrsMatchProps(componentName, el);
    });

    // Adding on Icon to avoid colliding with SVG namespace
    const element = componentTemplate($, componentName + 'Icon');

    const component = prettier.format(element, {
      singleQuote: true,
      trailingComma: 'es5',
      bracketSpacing: true,
      parser: 'flow',
    });

    await fs.writeFile(outputPath, component, 'utf-8');
  }));


  await fs.writeFile(
    path.join(outputDir, 'index.js'),
    svgPaths
      .map(filePath => {
        const componentName = getComponentName(filePath);
        return `export ${componentName} from './${componentName}';`
      })
      .join('\n'),
    'utf-8'
  );
};

module.exports = buildNativeIcons;
