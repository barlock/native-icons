import React, { PureComponent } from 'react';
import Svg, { G, Rect, Polygon, Circle } from 'react-native-svg';
import PropTypes from 'prop-types';

class TruckIcon extends PureComponent {
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
          <Rect x="1" y="3" width="15" height="13" />
          <Polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <Circle cx="5.5" cy="18.5" r="2.5" />
          <Circle cx="18.5" cy="18.5" r="2.5" />
        </G>
      </Svg>
    );
  }
}

export default TruckIcon;
