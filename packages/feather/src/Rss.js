import React, { PureComponent } from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';
import PropTypes from 'prop-types';

class RssIcon extends PureComponent {
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
          <Path d="M4 11a9 9 0 0 1 9 9" />
          <Path d="M4 4a16 16 0 0 1 16 16" />
          <Circle cx="5" cy="19" r="1" />
        </G>
      </Svg>
    );
  }
}

export default RssIcon;
