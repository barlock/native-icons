const _ = require('lodash');
const nativeComponents = require('./nativeComponents');

const variablePropPattern = /"({\w+})"/g;
const spreadPattern = /(\w+)="\.\.\."/g;

const getUsedComponents = ($, name) => {
  let nativeComponents = [];

  $('*').each((i, el) => { nativeComponents.push(el.tagName) });

  nativeComponents = _(nativeComponents)
    .uniq()
    .filter(tag => tag !== 'Svg')
    .value();

  nativeComponents
    .filter(tag => nativeComponents[tag])
    .forEach(tag => {
      throw new Error(`Cant build ${name}: No native component for ${tag}`)
    });

  return nativeComponents;
};

const template = ($, name) => {
  const renderValue = $('Svg')
    .toString()
    .replace(variablePropPattern, (match, value) => value)
    .replace(spreadPattern, (match, variable) => `{...${variable}}`);

  const nativeComponents = getUsedComponents($, name);

  return (
`import React, { PureComponent } from 'react';
import Svg, { ${nativeComponents.join(', ')} } from 'react-native-svg';
import PropTypes from 'prop-types';

class ${name} extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }
  
  static defaultProps = {
    color: '#000',
    size: '24',
  }
  
  render() {
    const { color, size, ...otherProps } = this.props;
    return (
      ${renderValue}
    )
  }
};

export default ${name}
`);
};

module.exports = template;
