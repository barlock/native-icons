import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class ShirtIcon extends PureComponent {
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
        <G {...otherProps} fill={color}>
          <Path d="M461.8 181.7c1.3-1.6 1.2-3.8-.2-5.3-11.5-12.1-61.3-63.7-89.1-83.7C352 78 332 64 310 64s-22 8-54 8-32-8-54-8-42 14-62.5 28.7c-27.8 20-77.6 71.6-89.1 83.7-1.4 1.5-1.5 3.7-.2 5.3l61.7 64c2.4 2.9 7.1 1.2 7.1-2.5v-44.9c0-4.5 3.2-8.5 7.6-9.2 5.6-.9 10.4 3.5 10.4 8.9v242c0 4.4 3.6 8 8 8h222c4.4 0 8-3.6 8-8V198.3c0-4.5 3.2-8.5 7.6-9.2 5.6-.9 10.4 3.5 10.4 8.9v45.2c0 3.8 4.7 5.4 7.1 2.5l61.7-64zM256 143c-30 0-54-12.7-54-36 0-30 24-10.7 54-10.7 29.8 0 54-19.3 54 10.7 0 23.3-24.2 36-54 36z" />
        </G>
      </Svg>
    );
  }
}

export default ShirtIcon;
