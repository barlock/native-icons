import React, { PureComponent } from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';
import PropTypes from 'prop-types';

class TrainIcon extends PureComponent {
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
          <Path d="M393.7 455.9l-50-48c-5.6-5.4-14.4-5.2-19.8.4-5.4 5.6-5.2 14.4.4 19.8l6.1 5.9H181.5l6.1-5.9c5.6-5.4 5.8-14.2.4-19.8-5.4-5.6-14.2-5.8-19.8-.4l-50 48c-5.6 5.4-5.8 14.2-.4 19.8 2.7 2.9 6.4 4.3 10.1 4.3 3.5 0 7-1.3 9.7-3.9l14.7-14.1h207.2l14.7 14.1c2.7 2.6 6.2 3.9 9.7 3.9 3.7 0 7.4-1.4 10.1-4.3 5.5-5.6 5.3-14.4-.3-19.8z" />
          <Path d="M337 48h-17c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16h-15c-35.3 0-65 27.7-65 63v236c0 35.3 144 65 144 65s144-29.7 144-65V111c0-35.3-27.7-63-63-63zm-81 304c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm96-160c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v64z" />
          <Circle cx="256" cy="304" r="30.5" />
        </G>
      </Svg>
    );
  }
}

export default TrainIcon;