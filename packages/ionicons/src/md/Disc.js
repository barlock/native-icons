import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class DiscIcon extends PureComponent {
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
          <Path d="M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm0 301.6c-51.8 0-93.6-41.8-93.6-93.6s41.8-93.6 93.6-93.6 93.6 41.8 93.6 93.6-41.8 93.6-93.6 93.6zm0-114.4c-11.4 0-20.8 9.4-20.8 20.8s9.4 20.8 20.8 20.8 20.8-9.4 20.8-20.8-9.4-20.8-20.8-20.8z" />
        </G>
      </Svg>
    );
  }
}

export default DiscIcon;
