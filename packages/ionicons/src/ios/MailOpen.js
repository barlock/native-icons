import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class MailOpenIcon extends PureComponent {
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
          <Path d="M453.5 209.8c-4-4-158.3-161.4-158.3-161.4C284.8 37.8 270.9 32 256 32c-14.9 0-28.8 5.8-39.2 16.5 0 0-153.6 156.5-158.3 161.4C53.9 214.7 48 224.7 48 236v212c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V235c0-11.7-6.6-21.1-10.5-25.2zm-19.4 42.3L353 336.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-151-161.2c-1.6-1.7-4.3-1.7-5.8 0L102.2 438.2c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L77.7 252c-9.7-9.9-2.4-35.8 16.1-35.8h324.4c16.5-.1 25.6 26.1 15.9 35.9z" />
        </G>
      </Svg>
    );
  }
}

export default MailOpenIcon;
