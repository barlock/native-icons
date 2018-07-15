import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class FlowerIcon extends PureComponent {
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
          <Path d="M405.1 256c25.2-11.9 42.9-37.1 42.9-66.9 0-41-33.6-74.3-75-74.3-15.9 0-30.3 4.8-42.6 13.1l.6-5.6c0-41-33.6-74.3-75-74.3s-75 33.3-75 74.3l.6 5.6c-12-8.3-26.7-13.1-42.6-13.1-41.4 0-75 33.3-75 74.3 0 29.7 17.7 55 42.9 66.9C81.7 267.9 64 293.1 64 322.9c0 41 33.6 74.3 75 74.3 15.9 0 30.3-4.8 42.6-13.1l-.6 5.6c0 41 33.6 74.3 75 74.3s75-33.3 75-74.3l-.6-5.6c12 8.3 26.7 13.1 42.6 13.1 41.4 0 75-33.3 75-74.3 0-29.8-17.7-55-42.9-66.9zM256 330.3c-41.4 0-75-33.3-75-74.3s33.6-74.3 75-74.3 75 33.3 75 74.3-33.6 74.3-75 74.3z" />
        </G>
      </Svg>
    );
  }
}

export default FlowerIcon;
