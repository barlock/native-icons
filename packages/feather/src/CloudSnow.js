import React, { PureComponent } from 'react';
import Svg, { G, Path, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class CloudSnowIcon extends PureComponent {
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
          <Path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
          <Line x1="8" y1="16" x2="8" y2="16" />
          <Line x1="8" y1="20" x2="8" y2="20" />
          <Line x1="12" y1="18" x2="12" y2="18" />
          <Line x1="12" y1="22" x2="12" y2="22" />
          <Line x1="16" y1="16" x2="16" y2="16" />
          <Line x1="16" y1="20" x2="16" y2="20" />
        </G>
      </Svg>
    );
  }
}

export default CloudSnowIcon;
