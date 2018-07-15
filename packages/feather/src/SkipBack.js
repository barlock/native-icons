import React, { PureComponent } from 'react';
import Svg, { G, Polygon, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class SkipBackIcon extends PureComponent {
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
          <Polygon points="19 20 9 12 19 4 19 20" />
          <Line x1="5" y1="19" x2="5" y2="5" />
        </G>
      </Svg>
    );
  }
}

export default SkipBackIcon;
