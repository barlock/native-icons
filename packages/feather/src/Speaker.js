import React, { PureComponent } from 'react';
import Svg, { G, Rect, Circle, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class SpeakerIcon extends PureComponent {
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
          <Rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <Circle cx="12" cy="14" r="4" />
          <Line x1="12" y1="6" x2="12" y2="6" />
        </G>
      </Svg>
    );
  }
}

export default SpeakerIcon;
