import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class RainyIcon extends PureComponent {
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
        <G {...otherProps} fill={color}>
          <Path d="M139 400s-23 25.3-23 40.7c0 12.8 10.3 23.3 23 23.3s23-10.5 23-23.3c0-15.4-23-40.7-23-40.7zM217 368s-23 25.3-23 40.7c0 12.8 10.4 23.3 23 23.3 12.7 0 23-10.5 23-23.3 0-15.4-23-40.7-23-40.7zM295 400s-23 25.3-23 40.7c0 12.8 10.3 23.3 23 23.3 12.6 0 23-10.5 23-23.3 0-15.4-23-40.7-23-40.7zM373 368s-23 25.3-23 40.7c0 12.8 10.4 23.3 23 23.3 12.7 0 23-10.5 23-23.3 0-15.4-23-40.7-23-40.7zM393.2 161.2C380.5 96.6 323.9 48 256 48c-39.7 0-76 14-100.9 45.4 34.3 2.6 66.1 15.2 90.7 39.8 18.2 18.2 31 40.5 37.4 64.8h-33.5c-15.3-43.7-56-75-105.7-75-6 0-14.3.7-20.6 2C70 136 32 180.4 32 235.5 32 297.6 79.4 352 141.2 352h242.7c51.5 0 96.2-46 96.2-97.8-.1-49.4-38.4-89.6-86.9-93z" />
        </G>
      </Svg>
    );
  }
}

export default RainyIcon;
