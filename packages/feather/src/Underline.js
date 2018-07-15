import React, { PureComponent } from 'react';
import Svg, { G, Path, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class UnderlineIcon extends PureComponent {
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
          <Path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
          <Line x1="4" y1="21" x2="20" y2="21" />
        </G>
      </Svg>
    );
  }
}

export default UnderlineIcon;
