import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class AngularIcon extends PureComponent {
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
          <Path d="M213.573 256h84.846l-42.427-89.356z" />
          <Path d="M255.981 32L32 112l46.12 272L256 480l177.75-96L480 112 255.981 32zM344 352l-26.589-56H194.584L168 352h-40L256 72l128 280h-40z" />
        </G>
      </Svg>
    );
  }
}

export default AngularIcon;
