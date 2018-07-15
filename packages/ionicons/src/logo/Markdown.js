import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class MarkdownIcon extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    color: '#000',
    size: '24',
  };

  render() {
    const { color, size, ...otherProps } = this.props;
    return (
      <Svg viewBox="0 0 512 512" height={size} width={size}>
        <G {...otherProps} fill={color}>
          <Path d="M447.659 96H64.341C46.504 96 32 110.484 32 128.308v255.349C32 401.493 46.504 416 64.341 416h383.318C465.496 416 480 401.493 480 383.656V128.308C480 110.484 465.496 96 447.659 96zM284.023 352h-56.048v-96l-42.04 53.878L143.913 256v96H87.869V160h56.044l42.022 67.98 42.04-67.98h56.048v192zm83.657 0l-69.635-96h42v-96h56.043v96h42.027l-70.453 96h.018z" />
        </G>
      </Svg>
    );
  }
}

export default MarkdownIcon;
