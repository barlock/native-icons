import React, { PureComponent } from 'react';
import Svg, { G, Line, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class HardDriveIcon extends PureComponent {
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
          <Line x1="22" y1="12" x2="2" y2="12" />
          <Path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
          <Line x1="6" y1="16" x2="6" y2="16" />
          <Line x1="10" y1="16" x2="10" y2="16" />
        </G>
      </Svg>
    );
  }
}

export default HardDriveIcon;
