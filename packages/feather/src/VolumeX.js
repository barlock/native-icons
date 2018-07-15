import React, { PureComponent } from 'react';
import Svg, { G, Polygon, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class VolumeXIcon extends PureComponent {
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
          {...otherProps}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <Line x1="23" y1="9" x2="17" y2="15" />
          <Line x1="17" y1="9" x2="23" y2="15" />
        </G>
      </Svg>
    );
  }
}

export default VolumeXIcon;
