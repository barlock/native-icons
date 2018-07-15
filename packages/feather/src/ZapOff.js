import React, { PureComponent } from 'react';
import Svg, { G, Polyline, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class ZapOffIcon extends PureComponent {
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
          {...otherProps}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Polyline points="12.41 6.75 13 2 10.57 4.92" />
          <Polyline points="18.57 12.91 21 10 15.66 10" />
          <Polyline points="8 8 3 14 12 14 11 22 16 16" />
          <Line x1="1" y1="1" x2="23" y2="23" />
        </G>
      </Svg>
    );
  }
}

export default ZapOffIcon;
