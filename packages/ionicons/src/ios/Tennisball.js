import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class TennisballIcon extends PureComponent {
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
          <Path d="M250.4 464c1-7.9 1.6-15.9 1.6-23.9 0-48.1-18.7-94.3-52.7-128.3S119 260 70.9 260c-7.7 0-15.4.5-22.9 1.4 2.8 110.3 92.3 199.3 202.4 202.6z" />
          <Path d="M230 74c0-8.3.5-16.4 1.4-24.5-95.3 11.7-171.7 89-182.2 184.7 7.2-.7 14.4-1.1 21.8-1.1 114.9 0 207.1 92.2 207.1 207 0 7.7-.4 15.3-1.3 22.8 96.6-10.1 174.6-86.2 185.8-182.4-8.4 1-16.9.6-25.5.6C322.1 281 230 188.9 230 74z" />
          <Path d="M308.7 202.3c34 34 80.2 52.7 128.3 52.7 9.1 0 18.1-.7 27-2-2.2-112-93.9-203.5-206.1-205-1.2 8.5-1.9 17.2-1.9 26 0 48.1 18.7 94.3 52.7 128.3zM232 49.3z" />
        </G>
      </Svg>
    );
  }
}

export default TennisballIcon;
