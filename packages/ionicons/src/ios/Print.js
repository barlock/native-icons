import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class PrintIcon extends PureComponent {
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
          <Path d="M128 248v200c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V248c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM384 48H128c-8.8 0-16 7.2-16 16v20c0 2.2 1.8 4 4 4h280c2.2 0 4-1.8 4-4V64c0-8.8-7.2-16-16-16z" />
          <Path d="M432.5 112h-352C62.9 112 48 125.8 48 143.3v174.4c0 17.5 14.9 32.3 32.5 32.3H96c4.4 0 8-3.6 8-8V236c0-15.5 12.5-28 28-28h248c15.5 0 28 12.5 28 28v106c0 4.4 3.6 8 8 8h16.5c17.6 0 31.5-14.8 31.5-32.3V143.3c0-17.5-13.9-31.3-31.5-31.3z" />
        </G>
      </Svg>
    );
  }
}

export default PrintIcon;
