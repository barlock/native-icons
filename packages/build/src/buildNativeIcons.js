const fs = require('fs-extra');
const globby = require('globby');
const path = require('path');
const cheerio = require('cheerio');
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

const wrapChildrenInGroup = ($) => {
  const svgElement = $('svg')[0];
  const svgSelection = $(svgElement);

  const extraSvgProps = _.difference(Object.keys(svgElement.attribs), nativeSvgProps);

  if (extraSvgProps.length > 0) {
    const propString = extraSvgProps.reduce((propString, attribute) => {
      propString += `${attribute}="${svgSelection.attr(attribute)}" `;
      return propString;
    }, 'otherProps="..." ');

    svgSelection.children().wrapAll(`<g ${propString}></g>`);
    extraSvgProps.forEach(attr => svgSelection.removeAttr(attr));
  } else {
    $(svgElement).attr('otherProps', '...');
  }
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
  });
};



const buildNativeIcons = async (svgPattern, colorProp, outputDir) => {
  const svgPaths = await globby(svgPattern);

  await fs.ensureDir(outputDir);

  await Promise.all(svgPaths.map(async filePath => {
    const svg = await fs.readFile(filePath, 'utf8');
    const name = path.basename(filePath, '.svg');
    const componentName = upperCamel(name);
    const outputPath = path.join(outputDir, `${componentName}.js`);
    const $ = cheerio.load(svg, {
      xmlMode: true
    });

    extendCheerio($);

    $('svg')
      .attr('height', '{size}')
      .attr('width', '{size}');

    wrapChildrenInGroup($);

    $('*').each((index, el) => {
      convertToNative($, el, colorProp);
      ensureAttrsMatchProps(name, el);
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
        const name = path.basename(filePath, '.svg');
        const componentName = upperCamel(name);


        return `export ${componentName} from './${componentName}';`
      })
      .join('\n'),
    'utf-8'
  );
};

module.exports = buildNativeIcons;
