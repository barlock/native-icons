import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class VolumeMuteIcon extends PureComponent {
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
          <Path d="M326.9 145.6c-2.2-1.1-4.6-1.6-6.9-1.6-3.6 0-7.1 1.2-10 3.5L244.8 200H192c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h52.8l65.2 52.5c2.9 2.3 6.5 3.5 10 3.5 2.3 0 4.7-.5 6.9-1.6 5.6-2.7 9.1-8.3 9.1-14.4V160c0-6.2-3.5-11.8-9.1-14.4z" />
        </G>
      </Svg>
    );
  }
}

export default VolumeMuteIcon;
