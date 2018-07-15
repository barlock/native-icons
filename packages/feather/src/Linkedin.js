import React, { PureComponent } from 'react';
import Svg, { G, Path, Rect, Circle } from 'react-native-svg';
import PropTypes from 'prop-types';

class LinkedinIcon extends PureComponent {
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
          <Path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <Rect x="2" y="9" width="4" height="12" />
          <Circle cx="4" cy="4" r="2" />
        </G>
      </Svg>
    );
  }
}

export default LinkedinIcon;
