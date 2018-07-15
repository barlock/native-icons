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
        <G fill={color} {...otherProps}>
          <Path d="M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm93.6 291.2H172.801c-34.318 0-62.4-28.082-62.4-62.399 0-34.319 28.082-62.4 62.4-62.4h3.117c9.364-36.4 41.601-62.399 80.083-62.399 45.764 0 83.199 37.435 83.199 83.198h10.4c29.118 0 52 22.882 52 52.001 0 29.117-22.882 51.999-52 51.999z" />
        </G>
      </Svg>
    );
  }
}

export default CloudCircleIcon;
