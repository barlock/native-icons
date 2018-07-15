import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class VkIcon extends PureComponent {
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
          <Path d="M427 299.1c-8.6-8-15.7-12.8-18.5-20.5-1-2.7-1.3-4.3-1-7.6.4-6 5.5-13.8 39.6-58.9 14.2-18.8 32.7-41.5 32.7-58.5 0-11-4.5-13.7-20.8-13.7h-74c-6.5 0-10.9 8.9-13.6 16.4-2.8 7.5-8.2 19-21.4 43.8-13.8 26-32.3 48.8-40 52.4-2.2 1-3.6 1-5.5.8-1.2-.1-3.8-.8-6.2-3.7-2.3-2.8-5.9-7.7-4.5-53.9.8-25.8 3.7-43.8-1.7-54.8-1.1-2.2-3.5-4.5-4.8-5.5-7.7-5.5-29.4-7.5-48-7.5s-32.9 2.1-40 4.2c-7.1 2.1-15.1 6.9-18.9 12-2.5 3.3 4.3 1.6 10.9 4.6 4 1.8 9.3 4.6 11.2 9.3 8 20.8 9.7 37.3 5.3 66.7-1.1 7.2-2.3 18.5-6.6 25.5-2.4 3.9-7.9 3.6-9.5 3.1-16.1-4.9-28.6-26-41.2-50.7-13.1-25.8-19.8-43.9-23.4-51.3s-9.1-11.4-18.4-11.4H42.3c-5.2 0-9.9 4.3-9.9 9 0 11 18.6 43 29.8 66 20.2 41.4 46.7 81.4 82.4 120.2C182 376.3 233 384 249.3 384s29-.6 33.3-1.5c2-.4 4.1-1.3 5.7-2.5 7.1-5.5 5.8-16 6.3-24.2.5-8.4 1.4-19.5 7-26 5.2-6.1 11.1-7.8 18.6-4.1 7 3.5 12 9.4 17.2 15.1 10.1 10.9 19.3 23.2 31.3 32.2 5.5 4.1 11.5 6.7 17.9 8.7 8.5 2.6 16.5 2.7 25.3 2.3 9.7-.4 17-.3 29-.3s27.7.5 33.1-3.5c2.6-2 6-5 6-11.3 0-11.9-12.2-31.7-53-69.8z" />
        </G>
      </Svg>
    );
  }
}

export default VkIcon;
