import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class CardIcon extends PureComponent {
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
          <Path d="M435.2 80H76.8c-24.9 0-44.6 19.6-44.6 44L32 388c0 24.4 19.9 44 44.8 44h358.4c24.9 0 44.8-19.6 44.8-44V124c0-24.4-19.9-44-44.8-44zm0 308H76.8V256h358.4v132zm0-220H76.8v-44h358.4v44z" />
        </G>
      </Svg>
    );
  }
}

export default CardIcon;
