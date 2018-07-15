import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class CarIcon extends PureComponent {
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
          <Path d="M403.208 117.333c-4.271-12.802-16-21.333-29.875-21.333H138.667c-13.875 0-25.604 8.531-29.875 21.333L64 234.667v160C64 406.396 73.604 416 85.333 416h21.334c11.729 0 21.333-9.604 21.333-21.333V384h256v10.667c0 11.729 9.604 21.333 21.333 21.333h21.334c11.729 0 21.333-9.604 21.333-21.333v-160l-44.792-117.334zM138.667 320c-18.125 0-32-13.865-32-32s13.875-32 32-32 32 13.866 32 32-13.875 32-32 32zm234.666 0c-18.125 0-32-13.865-32-32s13.875-32 32-32 32 13.866 32 32-13.875 32-32 32zM106.667 213.333l32-85.333h234.666l32 85.333H106.667z" />
        </G>
      </Svg>
    );
  }
}

export default CarIcon;
