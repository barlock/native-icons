import React, { PureComponent } from 'react';
import Svg, { G, Polyline, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class RepeatIcon extends PureComponent {
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
          <Polyline points="17 1 21 5 17 9" />
          <Path d="M3 11V9a4 4 0 0 1 4-4h14" />
          <Polyline points="7 23 3 19 7 15" />
          <Path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </G>
      </Svg>
    );
  }
}

export default RepeatIcon;
