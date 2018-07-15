import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class RewindIcon extends PureComponent {
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
          <Path d="M35.9 249.3L244 129.1c5.4-3.1 12.3.6 12.3 6.7V251l211.3-121.9c5.4-3.1 12.3.6 12.3 6.7v240.3c0 6.1-6.9 9.8-12.3 6.7L256.4 261v115.2c0 6.1-6.9 9.8-12.3 6.7L35.9 262.7c-5.2-3-5.2-10.4 0-13.4z" />
        </G>
      </Svg>
    );
  }
}

export default RewindIcon;
