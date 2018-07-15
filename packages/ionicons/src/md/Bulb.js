import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class BulbIcon extends PureComponent {
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
          <Path d="M192 428c0 10.6 8.6 20 20 20h88c11.4 0 20-9.4 20-20v-18H192v18zm64-364c-79.7 0-144 59.9-144 134 0 45.7 24.1 86.2 61.4 110.6V352c0 10.6 9.3 19.2 20.6 19.2h123.9c11.4 0 20.6-8.6 20.6-19.2v-43.4C375.9 284.2 400 243.7 400 198c0-74.1-64.3-134-144-134z" />
        </G>
      </Svg>
    );
  }
}

export default BulbIcon;
