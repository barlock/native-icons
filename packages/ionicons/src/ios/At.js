import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class AtIcon extends PureComponent {
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
          <Path d="M448 234.3c0 74.1-34.7 120.8-89.6 120.8-28.1 0-49.5-15-53.2-37.3h-4c-9.9 23.2-30.3 35.9-57.7 35.9-48.8 0-81.4-39.1-81.4-97.3 0-55.9 32.8-94.8 80.7-94.8 24.6 0 45.5 12.4 54.7 32.7h4v-27.8h39.9v129.3c0 16.1 8.9 25.8 24.9 25.8 27.7 0 45.3-33.6 45.3-85.8 0-83.3-62.4-139-154.6-139-91.2 0-156.2 66.5-156.2 160.6 0 96.2 64.3 157.6 164.4 157.6 19.6 0 39.3-1.7 54.4-4.6 9.8-1.8 18.8 5.6 18.8 15.5 0 7.3-5 13.7-12.1 15.4-18.2 4.3-40.1 6.8-62.7 6.8C141.9 448 64 372.8 64 256.1 64 142.2 143.5 64 259.4 64 370.8 64 448 133.5 448 234.3zm-242.8 23c0 37 17.4 59.4 45.7 59.4 29.8 0 48.6-23 48.6-59.4s-18.8-58.9-48.1-58.9c-29.1 0-46.2 21.8-46.2 58.9z" />
        </G>
      </Svg>
    );
  }
}

export default AtIcon;
