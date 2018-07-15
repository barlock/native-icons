import React, { PureComponent } from 'react';
import Svg, { G, Polyline, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class Minimize2Icon extends PureComponent {
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
          <Polyline points="4 14 10 14 10 20" />
          <Polyline points="20 10 14 10 14 4" />
          <Line x1="14" y1="10" x2="21" y2="3" />
          <Line x1="3" y1="21" x2="10" y2="14" />
        </G>
      </Svg>
    );
  }
}

export default Minimize2Icon;
