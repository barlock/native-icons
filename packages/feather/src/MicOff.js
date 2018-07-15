import React, { PureComponent } from 'react';
import Svg, { G, Line, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class MicOffIcon extends PureComponent {
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
          <Line x1="1" y1="1" x2="23" y2="23" />
          <Path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" />
          <Path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23" />
          <Line x1="12" y1="19" x2="12" y2="23" />
          <Line x1="8" y1="23" x2="16" y2="23" />
        </G>
      </Svg>
    );
  }
}

export default MicOffIcon;
