import React, { PureComponent } from 'react';
import Svg, { G, Circle, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class CrosshairIcon extends PureComponent {
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
          <Line x1="22" y1="12" x2="18" y2="12" />
          <Line x1="6" y1="12" x2="2" y2="12" />
          <Line x1="12" y1="6" x2="12" y2="2" />
          <Line x1="12" y1="22" x2="12" y2="18" />
        </G>
      </Svg>
    );
  }
}

export default CrosshairIcon;
