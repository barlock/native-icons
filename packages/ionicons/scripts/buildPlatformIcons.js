const globby = require('globby');
const fs = require('fs-extra');
const path = require('path');
const _ = require('lodash');
const upperCamel = string => _.upperFirst(_.camelCase(string));

const iconTemplate = (name) => {
  return (
`import { Platform } from 'react-native';
import Ios${name} from '../ios/${name}';
import Md${name} from '../md/${name}';

export default Platform.OS === 'ios' ? Ios${name} : Md${name};`)
};

const iconNamesFromGlob = async (glob) => {
  const paths = await globby(glob);

  return paths.map(filePath => upperCamel(
    path.basename(filePath, '.svg')
      .replace('ios-', '')
      .replace('md-', '')
  ));
};

const buildPlatformIcons = async (iosGlob, androidGlob, outputDir) => {
  const androidIcons = await iconNamesFromGlob(androidGlob);
  const iosIcons = await iconNamesFromGlob(iosGlob);
  const missingIos = _.difference(androidIcons, iosIcons);
  const missingAndroid = _.difference(iosIcons, androidIcons);

  // Ensure there's no missing icons
  if (missingAndroid.length > 0) {
    throw new Error('Android is missing icons: ' + missingAndroid.join(', '))
  }

  if (missingIos.length > 0) {
    throw new Error('Ios is missing icons: ' + missingIos.join(', '))
  }

  await fs.ensureDir(outputDir);

  await Promise.all(iosIcons.map(async iconName => {
    const outputPath = path.join(outputDir, `${iconName}.js`);
    await fs.writeFile(outputPath, iconTemplate(iconName), 'utf-8');
  }));

  await fs.writeFile(
    path.join(outputDir, 'index.js'),
    iosIcons
      .map(componentName => {
        return `export ${componentName} from './${componentName}';`
      })
      .join('\n'),
    'utf-8'
  );
};

module.exports = buildPlatformIcons;
