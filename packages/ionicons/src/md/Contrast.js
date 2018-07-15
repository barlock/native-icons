import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class ContrastIcon extends PureComponent {
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
          <Path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm113.1 321.1C338.9 399.4 298.7 416 256 416V96c42.7 0 82.9 16.6 113.1 46.9C399.4 173.1 416 213.3 416 256s-16.6 82.9-46.9 113.1z" />
        </G>
      </Svg>
    );
  }
}

export default ContrastIcon;
