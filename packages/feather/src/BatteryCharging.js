import React, { PureComponent } from 'react';
import Svg, { G, Path, Line, Polyline } from 'react-native-svg';
import PropTypes from 'prop-types';

class BatteryChargingIcon extends PureComponent {
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
          <Path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19" />
          <Line x1="23" y1="13" x2="23" y2="11" />
          <Polyline points="11 6 7 12 13 12 9 18" />
        </G>
      </Svg>
    );
  }
}

export default BatteryChargingIcon;
