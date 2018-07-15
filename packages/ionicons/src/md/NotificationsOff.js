import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class NotificationsOffIcon extends PureComponent {
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
          <Path d="M256 463.656c22.814 0 41.475-18.656 41.475-41.656h-82.95c0 23 18.661 41.656 41.475 41.656z" />
          <Path d="M131.083 107.172l.053.074L98.09 74.277 74.004 98.383l63.042 63.153C126.888 180.521 121 202.196 121 225.07v114.555l-41 41.656V402h297.743l36.182 36.33 24.079-24.301L425.9 402h.316L131.083 107.172zM391 225.07c0-63.526-45-117.677-104-131.218V79.274c0-17.706-13.371-31.243-31-31.243-17.628 0-31 13.537-31 31.243v14.578c-15 3.438-29.048 9.501-41.75 17.663L391 319.355V225.07z" />
        </G>
      </Svg>
    );
  }
}

export default NotificationsOffIcon;
