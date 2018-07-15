import React, { PureComponent } from 'react';
import Svg, { G, Polyline, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class CornerDownLeftIcon extends PureComponent {
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
          <Polyline points="9 10 4 15 9 20" />
          <Path d="M20 4v7a4 4 0 0 1-4 4H4" />
        </G>
      </Svg>
    );
  }
}

export default CornerDownLeftIcon;
