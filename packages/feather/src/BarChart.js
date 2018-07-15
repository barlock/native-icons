import React, { PureComponent } from 'react';
import Svg, { G, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class BarChartIcon extends PureComponent {
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
          <Line x1="12" y1="20" x2="12" y2="10" />
          <Line x1="18" y1="20" x2="18" y2="4" />
          <Line x1="6" y1="20" x2="6" y2="16" />
        </G>
      </Svg>
    );
  }
}

export default BarChartIcon;
