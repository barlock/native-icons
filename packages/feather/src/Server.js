import React, { PureComponent } from 'react';
import Svg, { G, Rect, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class ServerIcon extends PureComponent {
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
          <Rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <Rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <Line x1="6" y1="6" x2="6" y2="6" />
          <Line x1="6" y1="18" x2="6" y2="18" />
        </G>
      </Svg>
    );
  }
}

export default ServerIcon;
