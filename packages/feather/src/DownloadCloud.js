import React, { PureComponent } from 'react';
import Svg, { G, Polyline, Line, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class DownloadCloudIcon extends PureComponent {
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
          <Polyline points="8 17 12 21 16 17" />
          <Line x1="12" y1="12" x2="12" y2="21" />
          <Path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" />
        </G>
      </Svg>
    );
  }
}

export default DownloadCloudIcon;
