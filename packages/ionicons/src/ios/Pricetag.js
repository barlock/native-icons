import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class PricetagIcon extends PureComponent {
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
          <Path d="M435.2 48H312.3c-3.8 0-7.5 1.5-10.2 4.2L56.4 297.9c-11.2 11.2-11.2 29.5 0 40.7l117 117c11.2 11.2 29.5 11.2 40.7 0L459.7 210c2.7-2.7 4.2-6.4 4.2-10.2v-123C464 60.9 451.1 48 435.2 48zm-47.7 111.8c-20.4 2.2-37.4-14.9-35.3-35.3 1.6-14.8 13.5-26.8 28.3-28.3 20.4-2.2 37.4 14.9 35.3 35.3-1.6 14.8-13.5 26.7-28.3 28.3z" />
        </G>
      </Svg>
    );
  }
}

export default PricetagIcon;
