import React, { PureComponent } from 'react';
import Svg, { G, Circle, Polyline, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class ArrowRightCircleIcon extends PureComponent {
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
          <Circle cx="12" cy="12" r="10" />
          <Polyline points="12 16 16 12 12 8" />
          <Line x1="8" y1="12" x2="16" y2="12" />
        </G>
      </Svg>
    );
  }
}

export default ArrowRightCircleIcon;
