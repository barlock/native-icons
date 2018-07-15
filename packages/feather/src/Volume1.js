import React, { PureComponent } from 'react';
import Svg, { G, Polygon, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class Volume1Icon extends PureComponent {
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
          <Polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <Path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        </G>
      </Svg>
    );
  }
}

export default Volume1Icon;
