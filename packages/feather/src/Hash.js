import React, { PureComponent } from 'react';
import Svg, { G, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class HashIcon extends PureComponent {
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
          <Line x1="4" y1="9" x2="20" y2="9" />
          <Line x1="4" y1="15" x2="20" y2="15" />
          <Line x1="10" y1="3" x2="8" y2="21" />
          <Line x1="16" y1="3" x2="14" y2="21" />
        </G>
      </Svg>
    );
  }
}

export default HashIcon;
