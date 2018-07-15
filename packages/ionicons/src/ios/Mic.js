import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class MicIcon extends PureComponent {
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
          <Path d="M256 336c35.2 0 64-28.8 64-64V112c0-35.2-28.8-64-64-64s-64 28.8-64 64v160c0 35.2 28.8 64 64 64z" />
          <Path d="M352 192c-7.7 0-14 6.3-14 14v69c0 45.2-36.8 82-82 82s-82-36.8-82-82v-69c0-7.7-6.3-14-14-14s-14 6.3-14 14v69c0 55.9 41.9 102.2 96 109.1V436h-36c-7.7 0-14 6.3-14 14s6.3 14 14 14h100c7.7 0 14-6.3 14-14s-6.3-14-14-14h-36v-51.9c54.1-6.9 96-53.2 96-109.1v-69c0-7.7-6.3-14-14-14z" />
        </G>
      </Svg>
    );
  }
}

export default MicIcon;
