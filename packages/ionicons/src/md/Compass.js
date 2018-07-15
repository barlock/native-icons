import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class CompassIcon extends PureComponent {
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
          <Path d="M256 231.358c-13.442 0-24.643 11.2-24.643 24.642s11.2 24.643 24.643 24.643 24.643-11.2 24.643-24.643-11.201-24.642-24.643-24.642zM256 32C132.8 32 32 132.8 32 256s100.8 224 224 224 224-100.8 224-224S379.2 32 256 32zm49.284 273.284L121.6 390.4l85.116-183.679L390.4 121.6l-85.116 183.684z" />
        </G>
      </Svg>
    );
  }
}

export default CompassIcon;
