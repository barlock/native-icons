import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class BoatIcon extends PureComponent {
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
          <Path d="M84.255 413h1.063c34.123 0 63.977-19.021 85.305-42.494 21.325 23.473 51.18 42.762 85.304 42.762s63.979-19.334 85.305-42.806C362.559 393.934 392.412 413 426.535 413h1.062l51.253-138.78c2.126-5.329 1.063-11.641-1.07-16.976-2.136-5.333-7.237-8.487-12.567-10.623L427 234.133v-98.15C427 112.51 407.344 93 383.884 93h-63.979l-15.993-53h-95.969l-15.995 53h-63.979C104.511 93 85 112.51 85 135.982v98.15l-38.074 12.533c-5.33 2.136-10.582 5.334-12.718 10.667-2.135 5.335-3.158 10.49-1.031 16.887L84.255 413zM128 136h256v84.261l-128-41.605-128 41.605V136z" />
          <Path d="M341.231 408.007c-52.253 36.267-118.356 36.258-170.608-.009 0 0-57.638 64.002-106.632 64.002h21.327c29.854 0 58.646-11.726 85.305-25.594 53.315 27.734 117.293 27.728 170.608-.007C367.89 460.268 396.681 472 426.535 472h21.328c-47.651 0-106.632-63.993-106.632-63.993z" />
        </G>
      </Svg>
    );
  }
}

export default BoatIcon;
