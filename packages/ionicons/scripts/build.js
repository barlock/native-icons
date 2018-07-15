const buildNativeIcons = require('@native-icons/build');
const buildPlatformIcons = require('./buildPlatformIcons');
const path = require('path');

const iosGlob = path.join(__dirname, '../node_modules/ionicons/dist/ionicons/svg/ios-*.svg');
const androidGlob = path.join(__dirname, '../node_modules/ionicons/dist/ionicons/svg/md-*.svg');
const logoGlob = path.join(__dirname, '../node_modules/ionicons/dist/ionicons/svg/logo-*.svg');
const outputDir = path.join(__dirname, '..', 'src');

Promise.all([
  buildNativeIcons({
    svgGlob: iosGlob,
    nameMap: (name) => name.replace('Ios', ''),
    colorProp: 'fill',
    outputDir: path.join(outputDir, 'ios')
  }),
  buildNativeIcons({
    svgGlob: androidGlob,
    nameMap: (name) => name.replace('Md', ''),
    colorProp: 'fill',
    outputDir: path.join(outputDir, 'md')
  }),
  buildNativeIcons({
    svgGlob: logoGlob,
    nameMap: (name) => name.replace('Logo', ''),
    colorProp: 'fill',
    outputDir: path.join(outputDir, 'logo')
  }),
  buildPlatformIcons(iosGlob, androidGlob, path.join(outputDir, 'platform'))
]).catch(console.log);
