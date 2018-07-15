import React, { PureComponent } from 'react';
import Svg, { G, Path, Line, Polyline } from 'react-native-svg';
import PropTypes from 'prop-types';

class SunsetIcon extends PureComponent {
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
          <Path d="M17 18a5 5 0 0 0-10 0" />
          <Line x1="12" y1="9" x2="12" y2="2" />
          <Line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
          <Line x1="1" y1="18" x2="3" y2="18" />
          <Line x1="21" y1="18" x2="23" y2="18" />
          <Line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
          <Line x1="23" y1="22" x2="1" y2="22" />
          <Polyline points="16 5 12 9 8 5" />
        </G>
      </Svg>
    );
  }
}

export default SunsetIcon;
