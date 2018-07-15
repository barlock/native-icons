import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class BarcodeIcon extends PureComponent {
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
          <Path d="M88 128h48v256H88zM232 128h48v256h-48zM160 144h48v224h-48zM304 144h48v224h-48zM376 128h48v256h-48z" />
          <Path d="M104 104V56H16v400h88v-48H64V104zM408 56v48h40v304h-40v48h88V56z" />
        </G>
      </Svg>
    );
  }
}

export default BarcodeIcon;
