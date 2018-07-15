import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class CellularIcon extends PureComponent {
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
          <Path d="M408.4 51.8c-2.6-2.5-6.1-3.8-9.7-3.8-3.7 0-7.2 1.4-9.9 3.9-2.7 2.6-4.1 6-4.1 9.6 0 3.6 1.5 7 4.2 9.6 30.4 28.5 47.1 66.5 47.1 107.1 0 40.5-16.7 78.5-47.1 107.1-2.7 2.5-4.2 5.9-4.2 9.6 0 3.6 1.4 7 4.1 9.6 2.6 2.5 6.1 3.9 9.9 3.9 3.7 0 7.1-1.4 9.7-3.8C444.3 271 464 226.1 464 178.2v-.1c0-47.9-19.8-92.7-55.6-126.3z" />
          <Path d="M351 96.8c-2.4-2.3-5.6-3.5-9-3.5-3.3 0-6.5 1.2-8.9 3.4-2.5 2.3-3.9 5.4-3.9 8.7 0 3.3 1.3 6.4 3.8 8.7 18 17 27.8 39.8 27.8 64 0 24.2-9.9 47-27.8 64-2.5 2.3-3.8 5.4-3.8 8.7 0 3.3 1.4 6.4 3.9 8.7 2.4 2.2 5.5 3.4 8.9 3.4 3.4 0 6.6-1.3 9-3.5 22.8-21.7 35.4-50.5 35.4-81.3v-.1c0-30.7-12.6-59.5-35.4-81.2zM123.1 71.1c2.7-2.5 4.2-5.9 4.2-9.6 0-3.6-1.4-7-4.1-9.6-2.6-2.5-6.1-3.9-9.9-3.9-3.7 0-7.1 1.4-9.7 3.8C67.7 85.4 48 130.3 48 178.2v.2c0 47.8 19.8 92.6 55.6 126.2 2.6 2.5 6.1 3.8 9.7 3.8 3.7 0 7.2-1.4 9.9-3.9 2.7-2.6 4.1-6 4.1-9.6 0-3.6-1.5-7-4.2-9.6C92.7 256.8 76 218.8 76 178.2c-.1-40.6 16.7-78.6 47.1-107.1z" />
          <Path d="M179 114.1c2.5-2.3 3.8-5.4 3.8-8.7 0-3.3-1.4-6.4-3.9-8.7-2.4-2.2-5.5-3.4-8.9-3.4-3.4 0-6.6 1.3-9 3.5-22.8 21.7-35.4 50.5-35.4 81.3v.1c0 30.8 12.6 59.6 35.4 81.2 2.4 2.3 5.6 3.5 9 3.5 3.3 0 6.5-1.2 8.9-3.4 2.5-2.3 3.9-5.4 3.9-8.7 0-3.3-1.3-6.4-3.8-8.7-18-17-27.8-39.8-27.8-64-.1-24.2 9.8-46.9 27.8-64zM256 123.2c-26.5 0-48 21.5-48 48 0 21.6 14.3 39.9 34 45.9v233c0 7.7 6.3 13.9 14 13.9s14-6.2 14-13.9v-233c19.7-6 34-24.3 34-45.9 0-26.5-21.5-48-48-48z" />
        </G>
      </Svg>
    );
  }
}

export default CellularIcon;
