import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class ApertureIcon extends PureComponent {
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
          <Path d="M250.2 371.4c-1.8 0-2.7 2.2-1.4 3.4l54.9 54.9L326 452c42.4-15.2 78.5-43.7 103.1-80.6H250.2zM167 334.6V444c27 12.8 57.1 20 89 20 14.1 0 27.9-1.4 41.2-4.1L170.4 333.2c-1.2-1.3-3.4-.4-3.4 1.4zM256 48c-13.9 0-27.4 1.4-40.5 4l126.8 126.8c1.3 1.3 3.4.4 3.4-1.4V68.3C318.6 55.3 288.2 48 256 48zM68.1 166.6C55.2 193.7 48 224 48 256c0 14.1 1.4 27.9 4.1 41.2L179.2 170c1.3-1.3.4-3.4-1.4-3.4H68.1zM186.7 59.9C144 75 107.7 103.6 83 140.7h179.7c1.8 0 2.7-2.2 1.4-3.4l-77.4-77.4zM167 220.6v70.7c0 1.1.4 2.1 1.2 2.8l50 50c.8.8 1.8 1.2 2.8 1.2h70.7c1.1 0 2.1-.4 2.8-1.2l50-50c.8-.8 1.2-1.8 1.2-2.8v-70.7c0-1.1-.4-2.1-1.2-2.8l-50-50c-.8-.8-1.8-1.2-2.8-1.2H221c-1.1 0-2.1.4-2.8 1.2l-50 50c-.7.8-1.2 1.8-1.2 2.8zM460 215.5L333.6 342c-1.3 1.3-.4 3.4 1.4 3.4h108.8c13-27.1 20.2-57.4 20.2-89.4 0-13.9-1.4-27.4-4-40.5zM371.8 83.2v179c0 1.8 2.2 2.7 3.4 1.4l76.9-76.9c-15-42.6-43.5-78.8-80.3-103.5zM60.1 325.9c15.2 42.6 43.9 78.8 81 103.4V249.8c0-1.8-2.2-2.7-3.4-1.4l-77.6 77.5z" />
        </G>
      </Svg>
    );
  }
}

export default ApertureIcon;
