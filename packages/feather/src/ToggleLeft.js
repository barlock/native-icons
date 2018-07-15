import React, { PureComponent } from 'react';
import Svg, { G, Rect, Circle } from 'react-native-svg';
import PropTypes from 'prop-types';

class ToggleLeftIcon extends PureComponent {
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
          <Rect x="1" y="5" width="22" height="14" rx="7" ry="7" />
          <Circle cx="8" cy="12" r="3" />
        </G>
      </Svg>
    );
  }
}

export default ToggleLeftIcon;
