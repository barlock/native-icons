import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class AlarmIcon extends PureComponent {
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
          <Path d="M381.2 64.1c-1.3-.1-2.6-.1-3.9-.1h-.2c-16.2 0-32 5.4-44.6 15.1-1.6 1.3-2.6 3.2-2.7 5.2-.1 2 .8 4 2.3 5.4l89.8 80.5c1.3 1.1 2.9 1.8 4.6 1.8h.4c1.9-.1 3.6-1 4.8-2.4C440.9 159 448 150.8 448 133c.1-36.4-29.1-66.8-66.8-68.9zM64 133c0 17.8 7.1 26 16.3 36.6 1.2 1.4 2.9 2.3 4.8 2.4h.4c1.7 0 3.3-.6 4.6-1.8L180 89.7c1.5-1.4 2.4-3.3 2.3-5.4-.1-2-1-3.9-2.7-5.2C167 69.4 151.2 64 135 64h-.2c-1.3 0-2.6 0-3.9.1-37.7 2.1-67 32.5-66.9 68.9z" />
          <G>
            <Path d="M390 386c26.2-30.7 42-70.5 42-114 0-97.2-78.8-176-176-176S80 174.8 80 272c0 43.5 15.8 83.3 42 114l-34.7 35.5c-6.2 6.3-6 15.5.3 21.6 3.1 3 7.4 4.8 11.4 4.8 4.2 0 8.1-1.9 11.2-5.1l34.6-34.5c30.3 24.7 69 39.6 111.2 39.6s80.9-14.8 111.2-39.6l33.6 34.5c3.1 3.2 7.3 5.1 11.5 5.1 4 0 8.1-1.8 11.2-4.8 6.3-6.2 7.5-15.3 1.3-21.6L390 386zM270 274c0 7.7-6.3 14-14 14h-82c-7.7 0-14-6.3-14-14s6.3-14 14-14h68V158c0-7.7 6.3-14 14-14s14 6.3 14 14v116z" />
          </G>
        </G>
      </Svg>
    );
  }
}

export default AlarmIcon;
