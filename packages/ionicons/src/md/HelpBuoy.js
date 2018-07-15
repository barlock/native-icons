import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class HelpBuoyIcon extends PureComponent {
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
          <Path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm61 356l-12.2-39.6c13-5.8 24.9-14 35.3-24.4 10.4-10.4 18.6-22.3 24.4-35.3l39.5 12.1c-7.9 19.3-19.7 37-34.9 52.2-15.1 15.3-32.8 27.1-52.1 35zM195 108l12.2 39.6c-13 5.8-24.9 14-35.3 24.4-10.4 10.4-18.6 22.3-24.4 35.3L108 195.2c7.9-19.3 19.7-37 34.9-52.2 15.1-15.3 32.8-27.1 52.1-35zm61 84c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm113.1-49.1c15.2 15.2 26.9 32.9 34.9 52.1l-39.5 12.2c-5.9-13-14-24.9-24.4-35.3-10.4-10.4-22.3-18.6-35.3-24.4l12.1-39.5c19.3 7.9 37 19.7 52.2 34.9zM142.9 369.1c-15.2-15.1-27-32.8-34.9-52.1l39.5-12.2c5.9 13 14 24.9 24.4 35.3 10.4 10.4 22.3 18.6 35.3 24.4L195.1 404c-19.3-7.9-37-19.7-52.2-34.9z" />
        </G>
      </Svg>
    );
  }
}

export default HelpBuoyIcon;
