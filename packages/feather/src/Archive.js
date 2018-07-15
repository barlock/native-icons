import React, { PureComponent } from 'react';
import Svg, { G, Polyline, Rect, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class ArchiveIcon extends PureComponent {
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
          <Polyline points="21 8 21 21 3 21 3 8" />
          <Rect x="1" y="3" width="22" height="5" />
          <Line x1="10" y1="12" x2="14" y2="12" />
        </G>
      </Svg>
    );
  }
}

export default ArchiveIcon;
