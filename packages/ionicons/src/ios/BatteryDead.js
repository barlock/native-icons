import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class BatteryDeadIcon extends PureComponent {
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
          <Path d="M396 144H64c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h332c26.4 0 48-21.6 48-48V192c0-26.4-21.6-48-48-48zm20 176c0 11-9 20-20 20H64c-11 0-20-9-20-20V192c0-11 9-20 20-20h332c11 0 20 9 20 20v128zM464 204.6v102.8c16 0 32-27.7 32-51.4s-16-51.4-32-51.4z" />
        </G>
      </Svg>
    );
  }
}

export default BatteryDeadIcon;
