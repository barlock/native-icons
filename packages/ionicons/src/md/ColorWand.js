import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class ColorWandIcon extends PureComponent {
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
          <Path d="M200.8 157.2l-36.4 37.4L411.7 448l36.3-37.4zM181 64h37v68h-37zM181 262h37v68h-37zM270 176h69v37h-69zM305.6 115.8l-25.7-26.3-47.1 48.3 25.6 26.2zM168.8 137.8l-47.1-48.3-25.6 26.3 47.1 48.2zM96.1 277.9l25.6 26.2 47.1-48.2-25.6-26.3zM64 176h65v37H64z" />
        </G>
      </Svg>
    );
  }
}

export default ColorWandIcon;
