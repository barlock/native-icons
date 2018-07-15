import React, { PureComponent } from 'react';
import Svg, { G, Path, Circle, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class UserXIcon extends PureComponent {
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
          <Path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <Circle cx="8.5" cy="7" r="4" />
          <Line x1="18" y1="8" x2="23" y2="13" />
          <Line x1="23" y1="8" x2="18" y2="13" />
        </G>
      </Svg>
    );
  }
}

export default UserXIcon;
