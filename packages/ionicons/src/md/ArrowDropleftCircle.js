import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class ArrowDropleftCircleIcon extends PureComponent {
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
          <Path d="M464 256c0-114.875-93.125-208-208-208S48 141.125 48 256s93.125 208 208 208 208-93.125 208-208zm-272 0l96-96v192l-96-96z" />
        </G>
      </Svg>
    );
  }
}

export default ArrowDropleftCircleIcon;
