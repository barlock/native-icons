import React, { PureComponent } from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';
import PropTypes from 'prop-types';

class MedalIcon extends PureComponent {
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
          <Path d="M273.5 152.1H48l54.1-103.9h240.7z" />
          <Circle cx="256.2" cy="377.2" r="86.6" />
          <Path d="M348.9 299.1l115.1-147-69.3-103.9L256.4 256c32.3 0 62.7 12.7 85.5 35.5 2.5 2.5 4.8 5 7 7.6zM205.8 266.6L152.3 186H48.4l90.1 161.5c5.2-21.2 16.1-40.6 32-56.4 10.4-10.3 22.3-18.6 35.3-24.5z" />
        </G>
      </Svg>
    );
  }
}

export default MedalIcon;
