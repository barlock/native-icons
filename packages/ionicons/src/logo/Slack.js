import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class SlackIcon extends PureComponent {
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
          <Path d="M213.6 236.216l64.003-21.438 20.708 61.823-64.004 21.438z" />
          <Path d="M213.6 236.216l64.003-21.438 20.708 61.823-64.004 21.438z" />
          <Path d="M475.9 190C426.4 25 355-13.4 190 36.1S-13.4 157 36.1 322 157 525.4 322 475.9 525.4 355 475.9 190zm-83.3 107.1l-31.1 10.4 10.7 32.2c4.2 13-2.7 27.2-15.7 31.5-2.7.8-5.8 1.5-8.4 1.2-10-.4-19.6-6.9-23-16.9l-10.7-32.2-64.1 21.5L261 377c4.2 13-2.7 27.2-15.7 31.5-2.7.8-5.8 1.5-8.4 1.2-10-.4-19.6-6.9-23-16.9L203 360.4l-31 10.3c-2.7.8-5.8 1.5-8.4 1.2-10-.4-19.6-6.9-23-16.9-4.2-13 2.7-27.2 15.7-31.5l31.1-10.4-20.7-61.8-31.1 10.4c-2.7.8-5.8 1.5-8.4 1.2-10-.4-19.6-6.9-23-16.9-4.2-13 2.7-27.2 15.7-31.5l31.1-10.4-10.9-32.1c-4.2-13 2.7-27.2 15.7-31.5 13-4.2 27.2 2.7 31.5 15.7l10.7 32.2 64.1-21.5-10.7-32.2c-4.2-13 2.7-27.2 15.7-31.5 13-4.2 27.2 2.7 31.5 15.7l10.7 32.2 31.1-10.4c13-4.2 27.2 2.7 31.5 15.7 4.2 13-2.7 27.2-15.7 31.5l-31.1 10.4 20.7 61.8 31.1-10.4c13-4.2 27.2 2.7 31.5 15.7 4.2 13.2-2.7 27.4-15.8 31.7z" />
        </G>
      </Svg>
    );
  }
}

export default SlackIcon;
