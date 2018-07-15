const buildNativeIcons = require('@native-icons/build');
const path = require('path');

buildNativeIcons({
  svgGlob: path.join(__dirname, 'node_modules/feather-icons/dist/icons'),
  colorProp: 'stroke',
  outputDir: path.join(__dirname, 'src')
}).catch(console.log);
