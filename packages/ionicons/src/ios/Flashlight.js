import React, { PureComponent } from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';
import PropTypes from 'prop-types';

class FlashlightIcon extends PureComponent {
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
          <Path d="M317 32H195c-17.6 0-24 14.4-24 32h170c0-17.6-6.4-32-24-32zM196.1 147.5c7.6 8.8 11.9 20 11.9 31.7v265.9c0 21.9 17.9 34.9 39.9 34.9h16.3c21.9 0 39.9-12.9 39.9-34.9V179.2c0-11.7 4.3-22.8 11.9-31.7 15.4-17.9 25-34.5 25-67.5H171c0 35 9.6 49.6 25.1 67.5zm31.9 90.8c0-15.6 12.6-28.3 28-28.3s28 12.7 28 28.3v35.4c0 15.6-12.6 28.3-28 28.3s-28-12.7-28-28.3v-35.4z" />
          <Circle cx="256" cy="273" r="20" />
        </G>
      </Svg>
    );
  }
}

export default FlashlightIcon;
