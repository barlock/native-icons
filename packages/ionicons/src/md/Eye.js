import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class EyeIcon extends PureComponent {
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
          <Path d="M256 105c-101.8 0-188.4 62.4-224 151 35.6 88.6 122.2 151 224 151s188.4-62.4 224-151c-35.6-88.6-122.2-151-224-151zm0 251.7c-56 0-101.8-45.3-101.8-100.7S200 155.3 256 155.3 357.8 200.6 357.8 256 312 356.7 256 356.7zm0-161.1c-33.6 0-61.1 27.2-61.1 60.4s27.5 60.4 61.1 60.4 61.1-27.2 61.1-60.4-27.5-60.4-61.1-60.4z" />
        </G>
      </Svg>
    );
  }
}

export default EyeIcon;
