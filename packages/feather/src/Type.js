import React, { PureComponent } from 'react';
import Svg, { G, Polyline, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class TypeIcon extends PureComponent {
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
          <Polyline points="4 7 4 4 20 4 20 7" />
          <Line x1="9" y1="20" x2="15" y2="20" />
          <Line x1="12" y1="4" x2="12" y2="20" />
        </G>
      </Svg>
    );
  }
}

export default TypeIcon;
