import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class VideocamIcon extends PureComponent {
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
          <Path d="M384 219.5v-85.2c0-13.4-11.2-24.3-24.9-24.3H56.9C43.2 110 32 120.9 32 134.3v243.3C32 391 43.2 402 56.9 402h302.2c13.7 0 24.9-11 24.9-24.3v-85.2l96 97.3V122.2l-96 97.3z" />
        </G>
      </Svg>
    );
  }
}

export default VideocamIcon;
