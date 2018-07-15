import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class RoseIcon extends PureComponent {
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
          <Path d="M416 141.1c-18.9 3.9-36.8 8.2-53.7 12.8-40.5 11-75.5 24.9-105.4 38.2-19.3 8.6-26.2 12.4-51.5 25.9C147 248.9 112 289 112 349c0 67.8 55.6 115 144 115s144-51.2 144-119c0-67.7-61-114.7 16-203.9zM135.4 241.8c12.8-10.5 31.2-23.9 56.1-38.4 6.4-3.8 13.3-7.6 20.6-11.4 11.6-6.1 23.5-11.9 35.8-17.4-9.1-10.1-22.1-19.1-36.6-27C162.6 121.1 96 107.4 96 107.4c41.5 43.7 44.6 96.5 39.4 134.4zM352 77.7s-73.8-.9-125.8 55c0 0 27.7 17.3 42.7 32.3 37.2-15.6 82.3-28.6 115.2-36-6.5-21.7-32.1-51.3-32.1-51.3zM239.7 97C210.3 59.5 176 48 176 48c-15.3 20.8-24.3 38-29 51.7 21.1 5.9 36.5 12.3 62.4 24.7 9.5-10.6 18.1-19.1 30.3-27.4z" />
        </G>
      </Svg>
    );
  }
}

export default RoseIcon;
