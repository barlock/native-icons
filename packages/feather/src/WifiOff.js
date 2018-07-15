import React, { PureComponent } from 'react';
import Svg, { G, Line, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class WifiOffIcon extends PureComponent {
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
      <Svg width={size} height={size} viewBox="0 0 24 24">
        <G
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...otherProps}
        >
          <Line x1="1" y1="1" x2="23" y2="23" />
          <Path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
          <Path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
          <Path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
          <Path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
          <Path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <Line x1="12" y1="20" x2="12" y2="20" />
        </G>
      </Svg>
    );
  }
}

export default WifiOffIcon;
