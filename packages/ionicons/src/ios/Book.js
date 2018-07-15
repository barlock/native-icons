import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class BookIcon extends PureComponent {
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
          <Path d="M146 64.1c54.1 0 100 27.9 100 82V446c0 2.2-3.1 2.7-3.8.7v-.1c-10.3-34.2-38.2-67.6-82.3-70.5-34.2-2.2-66.9 12.9-93.1 37.1-1.6 1.5-4.3 2.9-6.6 2.9h-4.5c-3.7 0-7.6-2.7-7.6-6.1V120.2C48 88.1 91.9 64.1 146 64.1zM366 64c-54.1 0-100 27.9-100 82v299.9c0 2.2 3.1 2.7 3.8.7v-.1c10.3-34.2 39.4-67.9 82.3-70.5 32.9-2 63.9 11 93.1 37.1 1.6 1.4 4.3 2.9 6.6 2.9h4.5c3.7 0 7.6-2.7 7.6-6.1V120c.1-32-43.8-56-97.9-56z" />
        </G>
      </Svg>
    );
  }
}

export default BookIcon;
