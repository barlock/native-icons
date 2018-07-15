import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class BriefcaseIcon extends PureComponent {
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
          <Path d="M80 448h352c17.7 0 32-14.3 32-32V224H48v192c0 17.7 14.3 32 32 32zM432 128h-8v-8c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v8h-28V96c0-17.6-14.4-32-32-32H196c-17.6 0-32 14.4-32 32v32h-28v-8c0-4.4-3.6-8-8-8H96c-4.4 0-8 3.6-8 8v8h-8c-17.7 0-32 14.3-32 32v40h416v-40c0-17.7-14.3-32-32-32zm-112 0H192v-28c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8v28z" />
        </G>
      </Svg>
    );
  }
}

export default BriefcaseIcon;
