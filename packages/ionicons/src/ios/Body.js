import React, { PureComponent } from 'react';
import Svg, { G, Ellipse, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class BodyIcon extends PureComponent {
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
          <Ellipse cx="256" cy="80" rx="48" ry="48" />
          <Path d="M424 144H88c-13.3 0-24 10.7-24 24s10.7 24 24 24h98.5c5.6 1 13.2 3.8 17.2 14.2 4.7 12.1 2.4 33.6-.5 51.7l-3.8 21.4c0 .1 0 .2-.1.3l-30.4 172.2c-2.3 13 6.4 25.5 19.5 27.8 13.1 2.3 25.3-6.4 27.6-19.5l21-119.9v.2s6.2-32.5 18.5-32.5h1.1c12.5 0 18.5 32.5 18.5 32.5v-.1l21 119.9c2.3 13 14.7 21.7 27.7 19.4 13.1-2.3 21.7-14.8 19.4-27.8l-30.4-172.2c0-.1 0-.2-.1-.3l-3.8-21.4c-2.9-18.1-5.2-39.6-.5-51.7 4-10.4 11.6-13.2 17.2-14.2H424c13.3 0 24-10.7 24-24s-10.7-24-24-24z" />
        </G>
      </Svg>
    );
  }
}

export default BodyIcon;