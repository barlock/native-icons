import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class NoSmokingIcon extends PureComponent {
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
          <Path d="M360 256h16v48h-16zM112 304h129.6l-48-48H112z" />
          <Path d="M364.5 60.1c-.4-.2-.7-.4-1-.6-10.9-6-22.5-10.7-34.4-14.8l-5.4-1.8C302.3 36.1 279.6 32 256 32 132.3 32 32 132.3 32 256c0 84.3 46.6 157.6 115.4 195.8.4.2.7.5 1.1.7 10.9 6 22.5 10.7 34.4 14.8l5.4 1.8c21.4 6.8 44 10.9 67.7 10.9 123.7 0 224-100.3 224-224 0-84.3-46.6-157.7-115.5-195.9zM256 426.4c-9.3 0-18.4-.9-27.2-2.4-9.8-1.6-19.3-4.1-28.5-7.3-1.9-.6-3.8-1.2-5.6-1.9-6.5-2.5-12.9-5.3-19-8.6-53.6-28.7-90.1-85.2-90.1-150.3 0-37.2 12.4-71.4 32.7-99.4l237.2 237.2c-28.1 20.3-62.3 32.7-99.5 32.7zm137.8-71L156.6 118.2c28-20.2 62.1-32.6 99.4-32.6 9.3 0 18.3.9 27.2 2.4 9.8 1.6 19.3 4.1 28.5 7.3 1.8.6 3.7 1.2 5.6 1.9 6.2 2.4 12.2 5 18 8.1 54.2 28.5 91.2 85.3 91.2 150.8-.1 37.2-12.5 71.3-32.7 99.3z" />
          <Path d="M352 256h-34l34 34zM384 256h16v48h-16zM360.1 212.7c-8.8-4.1-22-5.7-45.6-5.7h-3.6c-12.7.1-15.9-.1-20-6.1-2.8-4.2-1-14.8 3.7-21.9 1.6-2.4 1.8-5.6.4-8.2-1.4-2.6-4.1-4.2-7-4.3-.1 0-9.4-.1-18.3-3.9-10.6-4.5-15.6-12.1-15.6-23.1 0-25.8 21.8-27.7 22.8-27.7v-16c-12 0-38.8 11-38.8 43.7 0 17.5 9 31 25.7 38 4.2 1.7 8.4 2.9 12 3.6-3.3 9.8-3.6 20.9 1.7 28.7 9 13.3 20.3 13.2 33.3 13.1h3.5c26.3 0 34.6 2.3 38.9 4.3 5.7 2.6 6.8 7.5 6.6 15.7v1h16v-1c0-7.1.3-22.8-15.7-30.2z" />
          <Path d="M400 244c0-25.7-3-39.2-9.1-49.6C382.3 180 368.5 172 352 172h-17.4c2.9-8.3 5.4-19.8 3.5-30.9-3.2-18.8-19.1-30-43.1-30v16c21 0 26.1 9.1 27.4 16.7 2.5 14.5-6.8 32.1-6.9 32.3-1.4 2.5-1.3 5.5.1 7.9s4.1 3.9 6.9 3.9H352c10.9 0 19.4 4.9 25.1 14.6 3.1 5.3 6.9 13.5 6.9 41.4h16v.1z" />
        </G>
      </Svg>
    );
  }
}

export default NoSmokingIcon;
