import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class CloudyIcon extends PureComponent {
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
          <Path d="M123.4 183c.4-.1.8-.1 1.2-.2-.5.1-.8.2-1.2.2z" />
          <Path d="M393.2 219.2C380.5 154.6 323.9 106 256 106c-39.7 0-76 14-100.9 45.4 34.3 2.6 66.1 15.2 90.7 39.8 18.2 18.2 31 40.5 37.4 64.8h-33.5c-15.3-43.7-56-75-105.7-75-6 0-14.3.7-20.6 2C70 194 32 238.4 32 293.5 32 355.6 82.2 406 144 406h242.7c51.5 0 93.3-42 93.3-93.8 0-49.4-38.3-89.6-86.8-93z" />
        </G>
      </Svg>
    );
  }
}

export default CloudyIcon;
