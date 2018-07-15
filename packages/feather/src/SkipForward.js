import React, { PureComponent } from 'react';
import Svg, { G, Polygon, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class SkipForwardIcon extends PureComponent {
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
          <Polygon points="5 4 15 12 5 20 5 4" />
          <Line x1="19" y1="5" x2="19" y2="19" />
        </G>
      </Svg>
    );
  }
}

export default SkipForwardIcon;
