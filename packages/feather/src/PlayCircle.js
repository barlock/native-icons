import React, { PureComponent } from 'react';
import Svg, { G, Circle, Polygon } from 'react-native-svg';
import PropTypes from 'prop-types';

class PlayCircleIcon extends PureComponent {
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
          <Polygon points="10 8 16 12 10 16 10 8" />
        </G>
      </Svg>
    );
  }
}

export default PlayCircleIcon;
