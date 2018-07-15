import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class LaptopIcon extends PureComponent {
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
          <Path d="M437.334 416C460.803 416 480 396.803 480 373.334V106.668C480 83.199 460.803 64 437.334 64H74.666C51.197 64 32 83.199 32 106.668v266.666C32 396.803 51.197 416 74.666 416H0c0 23.469 64 32 96 32h320c32 0 96-8.531 96-32h-74.666zM74.666 106.668h362.668v271.998H74.666V106.668zM256 434.666c-11.729 0-21.333-9.604-21.333-21.334 0-11.729 9.604-21.332 21.333-21.332s21.333 9.604 21.333 21.332c0 11.73-9.604 21.334-21.333 21.334z" />
        </G>
      </Svg>
    );
  }
}

export default LaptopIcon;
