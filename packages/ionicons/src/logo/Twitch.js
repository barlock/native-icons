import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class TwitchIcon extends PureComponent {
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
      <Svg viewBox="0 0 512 512" height={size} width={size}>
        <G fill={color} {...otherProps}>
          <Path d="M80 32l-32 80v304h96v64h64l64-64h80l112-112V32H80zm336 256l-64 64h-96.001L192 416v-64h-80V80h304v208z" />
          <Path d="M320 143h48v129h-48zM208 143h48v129h-48z" />
        </G>
      </Svg>
    );
  }
}

export default TwitchIcon;
