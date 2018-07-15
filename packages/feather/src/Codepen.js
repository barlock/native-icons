import React, { PureComponent } from 'react';
import Svg, { G, Polygon, Line, Polyline } from 'react-native-svg';
import PropTypes from 'prop-types';

class CodepenIcon extends PureComponent {
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
          <Polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
          <Line x1="12" y1="22" x2="12" y2="15.5" />
          <Polyline points="22 8.5 12 15.5 2 8.5" />
          <Polyline points="2 15.5 12 8.5 22 15.5" />
          <Line x1="12" y1="2" x2="12" y2="8.5" />
        </G>
      </Svg>
    );
  }
}

export default CodepenIcon;
