import React, { PureComponent } from 'react';
import Svg, { G, Polygon, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class Edit3Icon extends PureComponent {
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
          <Polygon points="14 2 18 6 7 17 3 17 3 13 14 2" />
          <Line x1="3" y1="22" x2="21" y2="22" />
        </G>
      </Svg>
    );
  }
}

export default Edit3Icon;
