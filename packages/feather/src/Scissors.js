import React, { PureComponent } from 'react';
import Svg, { G, Circle, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class ScissorsIcon extends PureComponent {
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
          <Circle cx="6" cy="6" r="3" />
          <Circle cx="6" cy="18" r="3" />
          <Line x1="20" y1="4" x2="8.12" y2="15.88" />
          <Line x1="14.47" y1="14.48" x2="20" y2="20" />
          <Line x1="8.12" y1="8.12" x2="12" y2="12" />
        </G>
      </Svg>
    );
  }
}

export default ScissorsIcon;
