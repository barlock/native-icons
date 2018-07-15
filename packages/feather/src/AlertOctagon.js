import React, { PureComponent } from 'react';
import Svg, { G, Polygon, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class AlertOctagonIcon extends PureComponent {
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
          <Polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
          <Line x1="12" y1="8" x2="12" y2="12" />
          <Line x1="12" y1="16" x2="12" y2="16" />
        </G>
      </Svg>
    );
  }
}

export default AlertOctagonIcon;
