import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class RadioButtonOnIcon extends PureComponent {
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
          <Path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" />
          <Path d="M363.5 148.5C334.8 119.8 296.6 104 256 104c-40.6 0-78.8 15.8-107.5 44.5C119.8 177.2 104 215.4 104 256s15.8 78.8 44.5 107.5C177.2 392.2 215.4 408 256 408c40.6 0 78.8-15.8 107.5-44.5C392.2 334.8 408 296.6 408 256s-15.8-78.8-44.5-107.5z" />
        </G>
      </Svg>
    );
  }
}

export default RadioButtonOnIcon;
