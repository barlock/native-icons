import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class StarOutlineIcon extends PureComponent {
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
          <Path d="M458 210.409l-145.267-12.476L256 64l-56.743 133.934L54 210.409l110.192 95.524L131.161 448 256 372.686 380.83 448l-33.021-142.066L458 210.409zM272.531 345.286L256 335.312l-16.53 9.973-59.988 36.191 15.879-68.296 4.369-18.79-14.577-12.637-52.994-45.939 69.836-5.998 19.206-1.65 7.521-17.75 27.276-64.381 27.27 64.379 7.52 17.751 19.208 1.65 69.846 5.998-52.993 45.939-14.576 12.636 4.367 18.788 15.875 68.299-59.984-36.189z" />
        </G>
      </Svg>
    );
  }
}

export default StarOutlineIcon;