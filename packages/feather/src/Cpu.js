import React, { PureComponent } from 'react';
import Svg, { G, Rect, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class CpuIcon extends PureComponent {
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
          <Rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
          <Rect x="9" y="9" width="6" height="6" />
          <Line x1="9" y1="1" x2="9" y2="4" />
          <Line x1="15" y1="1" x2="15" y2="4" />
          <Line x1="9" y1="20" x2="9" y2="23" />
          <Line x1="15" y1="20" x2="15" y2="23" />
          <Line x1="20" y1="9" x2="23" y2="9" />
          <Line x1="20" y1="14" x2="23" y2="14" />
          <Line x1="1" y1="9" x2="4" y2="9" />
          <Line x1="1" y1="14" x2="4" y2="14" />
        </G>
      </Svg>
    );
  }
}

export default CpuIcon;
