import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class CloudCircleIcon extends PureComponent {
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
          <Path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm82.6 272H173.4c-25.1 0-45.4-21.4-45.4-47.2 0-21 13.2-39.8 33.2-46.2.3-20 16.2-36.1 35.7-36.1 5.3 0 10.4 1.2 14.9 3.4 13.1-20.5 36.9-33.8 62.5-33.8 37.7 0 67.5 29.3 71.4 66.9 21.7 3.5 38.3 22.7 38.3 45.9 0 25.7-20.3 47.1-45.4 47.1z" />
        </G>
      </Svg>
    );
  }
}

export default CloudCircleIcon;
