import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class BusIcon extends PureComponent {
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
          <Path d="M80 352c0 19.198 13.864 24.531 26.667 36.271v38.396c0 11.729 9.599 21.334 21.333 21.334h21.333c11.734 0 21.334-9.604 21.334-21.334v-21.333h170.666v21.333c0 11.729 9.604 21.334 21.334 21.334H384c11.729 0 21.333-9.604 21.333-21.334v-38.396C418.136 376.531 432 370.136 432 352V148.334C432 73.667 349.864 64 256 64S80 73.667 80 148.334V352zm80 15.989c-18.136 0-32-13.864-32-32 0-18.135 13.864-32 32-32s32 13.865 32 32c0 18.136-13.864 32-32 32zm192 0c-18.136 0-32-13.864-32-32 0-18.135 13.864-32 32-32s32 13.865 32 32c0 18.136-13.864 32-32 32zm32-122.656H128V138.667h256v106.666z" />
        </G>
      </Svg>
    );
  }
}

export default BusIcon;
