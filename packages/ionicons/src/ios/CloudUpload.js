import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class CloudUploadIcon extends PureComponent {
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
          <Path d="M437.1 165.8C429 90.6 365.4 32 288 32c-51.2 0-96.3 25.6-123.4 64.7-8.3-3.4-17.4-5.3-26.9-5.3-39.1 0-70.8 34.4-71.4 73.4C26.4 177.5 0 216.5 0 257.5 0 307.7 40.7 352 90.9 352H243V210.1l-47.9 47.2c-5.1 5-13.3 5-18.4-.1-5-5.1-5-13.3.1-18.4l70-69c1.2-1.1 2.5-2.1 4.1-2.7 1.6-.7 3.3-1 5-1 3.4 0 6.6 1.3 9.1 3.7l70 69c5.1 5 5.2 13.3.1 18.4-5 5.1-13.3 5.2-18.4.1L269 210.1V352h152.1c50.2 0 90.9-44.3 90.9-94.5 0-44.7-32.3-84.1-74.9-91.7zM243 467c0 7.2 5.8 13 13 13s13-5.8 13-13V352h-26v115z" />
        </G>
      </Svg>
    );
  }
}

export default CloudUploadIcon;
