import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class CodeDownloadIcon extends PureComponent {
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
          <Path d="M234.6 160v125.7l-44.7-43.6L160 272l96 96 96-96-29.9-31-44.7 44.7V160h-42.8z" />
          <Path d="M190.4 354.1L91.9 256l98.4-98.1-30-29.9L32 256l128.4 128 30-29.9zm131.2 0L420 256l-98.4-98.1 30-29.9L480 256 351.6 384l-30-29.9z" />
        </G>
      </Svg>
    );
  }
}

export default CodeDownloadIcon;
