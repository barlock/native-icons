import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class HeartDislikeIcon extends PureComponent {
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
          <Path d="M423.8 426.8L56.3 65.1c-5.6-5.5-14.6-5.5-20.1.1-5.5 5.5-5.5 14.5 0 20l367.5 361.7c3.7 3.7 9 4.9 13.7 3.6 2.4-.6 4.6-1.9 6.4-3.7 5.6-5.5 5.6-14.5 0-20zM64 169c0 37 15.2 89.5 46.8 132.7C171 384 272 456 272 456s29.3-20.3 65.7-51.6L68 139c-2.6 9.6-4 19.6-4 30zM434.2 301.7C465.8 258.5 480 206 480 169c0-62.1-50.1-112.4-112-113h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-29.2.3-55.8 11.6-75.7 30l281.9 277.4c19.3-19.1 36.2-40 52-61.7z" />
        </G>
      </Svg>
    );
  }
}

export default HeartDislikeIcon;
