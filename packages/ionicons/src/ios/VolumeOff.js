import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class VolumeOffIcon extends PureComponent {
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
          <Path d="M390.1 464c-4.9 0-9.7-2.5-12.3-7L149.7 69.3c-4-6.7-1.7-15.4 5.1-19.3 6.8-3.9 15.5-1.7 19.5 5.1l228.1 387.7c4 6.7 1.7 15.4-5.1 19.3-2.2 1.3-4.7 1.9-7.2 1.9zM133 200H80c-8.9 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h53l65.4 52.5c2.9 2.3 6.5 3.5 10.1 3.5 2.4 0 4.7-.5 6.9-1.6 5.6-2.7 9.1-8.3 9.1-14.4V227.9L184 159.1 133 200zM448 256c0-59.3-23.3-114.9-65.5-156.5-4.7-4.7-12.3-4.6-17 .1-4.7 4.7-4.6 12.3.1 17C403.3 153.7 424 203.2 424 256c0 44.4-14.7 86.4-41.7 120.8l13 22C429.4 359.1 448 309 448 256z" />
          <Path d="M385.2 256c0-43.5-16.7-84.3-46.9-114.9-4.7-4.7-12.3-4.8-17-.1-4.7 4.7-4.8 12.3-.1 17 25.8 26.1 40 60.9 40 98.1 0 21.6-4.8 42.5-13.9 61.2l14.2 24.1c15.4-25.4 23.7-54.7 23.7-85.4zM317.6 256c0-27.8-10.7-53.9-30-73.4-4.7-4.7-12.3-4.8-17-.1-.6.6-1.1 1.2-1.6 1.9l48.1 81.8c.3-3.4.5-6.8.5-10.2z" />
        </G>
      </Svg>
    );
  }
}

export default VolumeOffIcon;