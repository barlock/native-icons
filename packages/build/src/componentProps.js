const touchableProps = [
  'disabled',
  'onPress',
  'onPressIn',
  'onPressOut',
  'onLongPress',
  'delayPressIn',
  'delayPressOut',
  'delayLongPress',
];

const layoutProps = [
  'onLayout'
];

// There might be more
// https://github.com/react-native-community/react-native-svg/blob/c415dbd6ae77834f7ea465eee63f0207828e5104/lib/props.js#L25
const responderProps = [
  'pointerEvents'
];

const fillProps = [
  'fill',
  'fillOpacity',
  'fillRule',
];

const clipProps = [
  'clipRule',
  'clipPath',
];

const definationProps = [
  'name',
];

const strokeProps = [
  'stroke',
  'strokeWidth',
  'strokeOpacity',
  'strokeDasharray',
  'strokeDashoffset',
  'strokeLinecap',
  'strokeLinejoin',
  'strokeMiterlimit',
];

const transformProps = [
  'scale',
  'scaleX',
  'scaleY',
  'rotate',
  'rotation',
  'translate',
  'translateX',
  'translateY',
  'x',
  'y',
  'origin',
  'originX',
  'originY',
  'skew',
  'skewX',
  'skewY',
  'transform',
];

const pathProps = [
  ...fillProps,
  ...strokeProps,
  ...clipProps,
  ...transformProps,
  ...responderProps,
  ...touchableProps,
  ...layoutProps,
  ...definationProps
];

const fontProps = [
  'fontStyle',
  'fontVariant',
  'fontWeight',
  'fontStretch',
  'fontSize',
  'fontFamily',
  'textAnchor',
  'textDecoration',
  'letterSpacing',
  'wordSpacing',
  'kerning',
  'fontVariantLigatures',
  'font'
];

const textSpecificProps = [
  ...pathProps,
  ...fontProps,
  'alignmentBaseline',
  'baselineShift',
  'verticalAlign',
  'lengthAdjust',
  'textLength',
  'fontData: PropTypes.object',
  'fontFeatureSettings'
];

// https://svgwg.org/svg2-draft/text.html#TSpanAttributes
const textProps = [
  ...textSpecificProps,
  'dx',
  'dy'
];

// https://svgwg.org/svg2-draft/text.html#TextPathAttributes
// https://developer.mozilla.org/en/docs/Web/SVG/Element/textPath
const textPathProps = [
  ...textSpecificProps,
  'href',
  'startOffset',
  'method',
  'spacing',
  'side',
  'midLine'
];

module.exports = {
  fillProps,
  strokeProps,
  fontProps,
  textProps,
  textPathProps,
  clipProps,
  pathProps,
  touchableProps,
  responderProps
};
