import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class FlameIcon extends PureComponent {
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
          <Path d="M393.3 222.1l-.2 10.4c-.8 11.7-7.9 43.4-22.1 54.7 7-15.2 17.3-47.2 10.2-82.7C361.6 107 287.5 65.6 193 50l-17.2-2.2c39.5 47.2 56.1 81.7 49.7 116.8-2.3 12.6-10 23.4-14 31.6 0 0 2.4-12.9 2-28.7-.3-14.2-6.6-31-18-39.6 3.5 18.4-.8 33.5-9.1 47.7-24.7 42.2-85.4 57.8-90.4 135.8v3.8c0 53.7 25.6 99 68.7 125-6.8-12.3-12-35.2-5.7-60.2 4 23.7 14 36 24.9 51.8 8.2 11.7 19.1 19.3 33.1 24.9s31 7.2 47.9 7.2c55.8 0 91.4-18.1 119.1-50.5s32.1-68 32.1-106.4-8.5-60.9-22.8-84.9z" />
        </G>
      </Svg>
    );
  }
}

export default FlameIcon;
