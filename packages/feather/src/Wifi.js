import React, { PureComponent } from 'react';
import Svg, { G, Path, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class WifiIcon extends PureComponent {
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
          <Path d="M5 12.55a11 11 0 0 1 14.08 0" />
          <Path d="M1.42 9a16 16 0 0 1 21.16 0" />
          <Path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <Line x1="12" y1="20" x2="12" y2="20" />
        </G>
      </Svg>
    );
  }
}

export default WifiIcon;
