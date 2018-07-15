import React, { PureComponent } from 'react';
import Svg, { G, Circle, Line, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class AnchorIcon extends PureComponent {
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
          <Circle cx="12" cy="5" r="3" />
          <Line x1="12" y1="22" x2="12" y2="8" />
          <Path d="M5 12H2a10 10 0 0 0 20 0h-3" />
        </G>
      </Svg>
    );
  }
}

export default AnchorIcon;
