import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class YenIcon extends PureComponent {
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
        <G fill={color} {...otherProps}>
          <Path d="M448 32h-80L256 253.128 144 32H64l112.368 208H128v48h73.564L216 319v17h-88v48h88v96h80v-96h88v-48h-88v-17l14.891-31H384v-48h-48.289L448 32z" />
        </G>
      </Svg>
    );
  }
}

export default YenIcon;
