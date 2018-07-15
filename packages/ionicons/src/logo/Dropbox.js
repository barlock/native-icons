import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class DropboxIcon extends PureComponent {
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
          <Path d="M177 77L64 150.9l78.1 62.7L256 143.1zM64 276.3l113 73.9 79-66.1-113.9-70.5zM256 284.1l79 66.1 113-73.9-78.1-62.7zM448 150.9L335 77l-79 66.1 113.9 70.5z" />
          <Path d="M256.2 298.3l-79.8 66-34.4-22.2V367l114 68 114-68v-24.9l-34.2 22.2z" />
        </G>
      </Svg>
    );
  }
}

export default DropboxIcon;
