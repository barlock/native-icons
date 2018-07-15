import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class TextIcon extends PureComponent {
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
          <Path d="M408 64H96c-22.002 0-32 17.998-32 40v344l64-64h280c22.002 0 40-17.998 40-40V104c0-22.002-17.998-40-40-40zM198.4 242H160v-40h38.4v40zm76.8 0h-38.4v-40h38.4v40zm76.8 0h-38.4v-40H352v40z" />
        </G>
      </Svg>
    );
  }
}

export default TextIcon;
