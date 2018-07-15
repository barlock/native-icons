import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class LeafIcon extends PureComponent {
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
          <Path d="M453.9 378.7c-51.8-8-55.7-11.7-55.7-11.7 15.6-74-22.4-151.1-76.3-195.6C250.1 112.2 141 155.2 56 65.2c-19.8-21-8.3 235.5 98.1 332.7 77.8 71 169.4 49.2 194.5 37.6 22.8-10.6 38.7-33.9 38.7-33.9 41.5 13 62 14.2 62 14.2 14.6 1.8 22-34.4 4.6-37.1zm-91.8 7.4c-77.7-23.3-145.3-81-189.1-126.2-3.6-3.7 1.6-9.2 5.5-6 43.1 35.5 108.9 80 193.3 107.9.2 8.1-4.5 19.7-9.7 24.3z" />
        </G>
      </Svg>
    );
  }
}

export default LeafIcon;
