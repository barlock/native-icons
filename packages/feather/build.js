const buildNativeIcons = require('@native-icons/build');
const path = require('path');

buildNativeIcons(
  path.join(__dirname, 'node_modules/feather-icons/dist/icons'),
  'stroke',
  path.join(__dirname, 'src')
).catch(console.log);
