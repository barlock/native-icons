const {
  fillProps,
  strokeProps,
  fontProps,
  textProps,
  textPathProps,
  clipProps,
  pathProps,
  touchableProps,
  responderProps
} = require('./componentProps');

const nativeComponents = {
  Circle: [
    ...pathProps,
    'cx',
    'cy',
    'r'
  ],
  ClipPath: [
    'id'
  ],
  Defs: [],
  Ellipse: [
    ...pathProps,
    'cx',
    'cy',
    'rx',
    'ry'
  ],
  G: [
    'otherProps',
    ...pathProps,
    ...fontProps
  ],
  Image: [
    ...responderProps,
    ...touchableProps,
    'x',
    'y',
    'width',
    'height',
    'href',
    'preserveAspectRatio',
  ],
  Line: [
    ...pathProps,
    'x1',
    'x2',
    'y1',
    'y2',
  ],
  LinearGradient: [
    'x1',
    'x2',
    'y1',
    'y2',
    'gradientUnits',
    'id'
  ],
  Path: [
    ...pathProps,
    'd'
  ],
  Pattern: [
    'x1',
    'x2',
    'y1',
    'y2',
    'patternTransform',
    'patternUnits',
    'patternContentUnits',
  ],
  Polygon: [
    ...pathProps,
    'points'
  ],
  Polyline: [
    ...pathProps,
    'points'
  ],
  RadialGradient: [
    'fx',
    'fy',
    'rx',
    'ry',
    'convertChangesToXMLcy',
    'r',
    'gradientUnits',
    'id',
  ],
  Rect: [
    ...pathProps,
    'x',
    'y',
    'width',
    'height',
    'rx',
    'ry',
  ],
  Shape: [],
  Stop: [
    'stopColor',
    'stopOpacity',
  ],
  Svg: [
    'otherProps',
    'opacity',
    'width',
    'height',
    'viewBox',
    'preserveAspectRatio'
  ],
  Symbol: [
    'id',
    'viewBox',
    'preserveAspectRatio'
  ],
  TSpan: textProps,
  Text: textProps,
  TextPath: textPathProps,
  Use: [
    ...pathProps,
    'href',
    'width',
    'height',
  ]
};

module.exports = nativeComponents;
