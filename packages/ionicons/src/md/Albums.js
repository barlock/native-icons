import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class AlbumsIcon extends PureComponent {
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
          <Path d="M154.7 464h266.7c23.5 0 42.7-19.2 42.7-42.7V154.7c0-23.5-19.2-42.7-42.7-42.7H154.7c-23.5 0-42.7 19.2-42.7 42.7v266.7c0 23.4 19.2 42.6 42.7 42.6z" />
          <Path d="M90.7 48h266.7c23.5 0 42.7 19.2 42.7 42.7V96H138.7C115.2 96 96 115.2 96 138.7V400h-5.3C67.2 400 48 380.8 48 357.3V90.7C48 67.2 67.2 48 90.7 48z" />
        </G>
      </Svg>
    );
  }
}

export default AlbumsIcon;
