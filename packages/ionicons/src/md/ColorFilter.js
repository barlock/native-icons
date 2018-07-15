import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class ColorFilterIcon extends PureComponent {
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
          <Path d="M441.8 120.1l-49.9-49.9c-8.3-8.3-21.8-8.3-30.1 0l-66.6 66.6L254.1 96 224 126.1l30.3 30.3L64 346.7V448h101.3l190.3-190.3 30.3 30.3 30.1-30.1-41-41 66.6-66.6c8.5-8.4 8.5-21.8.2-30.2zM147.6 405.4l-41-41 171.9-171.9 41 41-171.9 171.9z" />
        </G>
      </Svg>
    );
  }
}

export default ColorFilterIcon;
