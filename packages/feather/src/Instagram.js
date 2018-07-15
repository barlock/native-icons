import React, { PureComponent } from 'react';
import Svg, { G, Rect, Path, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class InstagramIcon extends PureComponent {
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
          {...otherProps}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <Path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <Line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
        </G>
      </Svg>
    );
  }
}

export default InstagramIcon;
