import React, { PureComponent } from 'react';
import Svg, { G, Rect } from 'react-native-svg';
import PropTypes from 'prop-types';

class PauseIcon extends PureComponent {
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
          <Rect x="6" y="4" width="4" height="16" />
          <Rect x="14" y="4" width="4" height="16" />
        </G>
      </Svg>
    );
  }
}

export default PauseIcon;
