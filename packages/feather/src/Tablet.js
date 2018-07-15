import React, { PureComponent } from 'react';
import Svg, { G, Rect, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class TabletIcon extends PureComponent {
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
          <Rect
            x="4"
            y="2"
            width="16"
            height="20"
            rx="2"
            ry="2"
            transform="rotate(180 12 12)"
          />
          <Line x1="12" y1="18" x2="12" y2="18" />
        </G>
      </Svg>
    );
  }
}

export default TabletIcon;
