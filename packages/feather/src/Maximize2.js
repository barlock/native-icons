import React, { PureComponent } from 'react';
import Svg, { G, Polyline, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class Maximize2Icon extends PureComponent {
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
          <Polyline points="15 3 21 3 21 9" />
          <Polyline points="9 21 3 21 3 15" />
          <Line x1="21" y1="3" x2="14" y2="10" />
          <Line x1="3" y1="21" x2="10" y2="14" />
        </G>
      </Svg>
    );
  }
}

export default Maximize2Icon;
