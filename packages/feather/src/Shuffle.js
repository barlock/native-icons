import React, { PureComponent } from 'react';
import Svg, { G, Polyline, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class ShuffleIcon extends PureComponent {
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
          <Polyline points="16 3 21 3 21 8" />
          <Line x1="4" y1="20" x2="21" y2="3" />
          <Polyline points="21 16 21 21 16 21" />
          <Line x1="15" y1="15" x2="21" y2="21" />
          <Line x1="4" y1="4" x2="9" y2="9" />
        </G>
      </Svg>
    );
  }
}

export default ShuffleIcon;
