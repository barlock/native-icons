import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class RemoveCircleIcon extends PureComponent {
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
          <Path d="M256 48C141.125 48 48 141.125 48 256s93.125 208 208 208 208-93.125 208-208S370.875 48 256 48zm107 229H149v-42h214v42z" />
        </G>
      </Svg>
    );
  }
}

export default RemoveCircleIcon;
