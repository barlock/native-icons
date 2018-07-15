import React, { PureComponent } from 'react';
import Svg, { G, Circle, Polyline, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class ArrowDownCircleIcon extends PureComponent {
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
          <Circle cx="12" cy="12" r="10" />
          <Polyline points="8 12 12 16 16 12" />
          <Line x1="12" y1="8" x2="12" y2="16" />
        </G>
      </Svg>
    );
  }
}

export default ArrowDownCircleIcon;
