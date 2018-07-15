import React, { PureComponent } from 'react';
import Svg, { G, Polyline, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class MoveIcon extends PureComponent {
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
          <Polyline points="5 9 2 12 5 15" />
          <Polyline points="9 5 12 2 15 5" />
          <Polyline points="15 19 12 22 9 19" />
          <Polyline points="19 9 22 12 19 15" />
          <Line x1="2" y1="12" x2="22" y2="12" />
          <Line x1="12" y1="2" x2="12" y2="22" />
        </G>
      </Svg>
    );
  }
}

export default MoveIcon;
