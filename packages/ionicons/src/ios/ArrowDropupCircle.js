import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class ArrowDropupCircleIcon extends PureComponent {
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
          <Path d="M256 464c114.9 0 208-93.1 208-208S370.9 48 256 48 48 141.1 48 256s93.1 208 208 208zm0-244.5l-81.1 81.9c-7.5 7.5-19.8 7.5-27.3 0s-7.5-19.8 0-27.3l95.7-95.4c7.3-7.3 19.1-7.5 26.6-.6l94.3 94c3.8 3.8 5.7 8.7 5.7 13.7 0 4.9-1.9 9.9-5.6 13.6-7.5 7.5-19.7 7.6-27.3 0l-81-79.9z" />
        </G>
      </Svg>
    );
  }
}

export default ArrowDropupCircleIcon;
