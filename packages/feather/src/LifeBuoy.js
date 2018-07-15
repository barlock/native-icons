import React, { PureComponent } from 'react';
import Svg, { G, Circle, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class LifeBuoyIcon extends PureComponent {
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
          <Circle cx="12" cy="12" r="4" />
          <Line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
          <Line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
          <Line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
          <Line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
          <Line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
        </G>
      </Svg>
    );
  }
}

export default LifeBuoyIcon;
