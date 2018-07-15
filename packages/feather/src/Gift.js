import React, { PureComponent } from 'react';
import Svg, { G, Polyline, Rect, Line, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class GiftIcon extends PureComponent {
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
          <Polyline points="20 12 20 22 4 22 4 12" />
          <Rect x="2" y="7" width="20" height="5" />
          <Line x1="12" y1="22" x2="12" y2="7" />
          <Path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
          <Path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </G>
      </Svg>
    );
  }
}

export default GiftIcon;
