import React, { PureComponent } from 'react';
import Svg, { G, Polygon, Rect } from 'react-native-svg';
import PropTypes from 'prop-types';

class VideoIcon extends PureComponent {
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
          <Polygon points="23 7 16 12 23 17 23 7" />
          <Rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </G>
      </Svg>
    );
  }
}

export default VideoIcon;
