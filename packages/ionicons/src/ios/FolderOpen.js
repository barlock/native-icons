import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class FolderOpenIcon extends PureComponent {
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
          <Path d="M448 119c0-13.3-9.4-23-22.8-23H230.9c-2.8 0-4.3-.6-6.1-2.4l-22.5-22.5-.2-.2c-4.9-4.6-8.9-6.9-17.3-6.9H88.7C74.9 64 64 74.3 64 87v73h384v-41zM64 188h-8.3c-12.8 0-25.3 5.1-23.5 24.3C34 231.5 55.7 423 55.7 423c2.7 17.8 11.7 25 25 25h352.5c12.7 0 21-7.8 23-25 0 0 22.2-184.9 23.6-205.5 1.4-20.5-8.9-29.5-23.6-29.5H64z" />
        </G>
      </Svg>
    );
  }
}

export default FolderOpenIcon;
