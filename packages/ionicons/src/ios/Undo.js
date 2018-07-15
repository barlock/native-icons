import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class UndoIcon extends PureComponent {
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
          <Path d="M479.9 394.9c0-19.6 4.2-97.1-56.8-158.7-40.4-40.7-91.9-61.7-163.4-65.5-2.1-.1-3.8-1.9-3.8-4V84c0-3.2-3.5-5.1-6.2-3.4L33.8 222.8c-2.4 1.6-2.4 5.1 0 6.7l215.9 142.2c2.7 1.8 6.2-.1 6.2-3.4v-81.6c0-2.3 1.9-4.1 4.2-4 44.1 1.7 69.5 10.9 97.1 23.2 36.1 16.2 72.9 50.9 94.5 83.5 13.1 19.9 19.2 33.9 21.4 39.7.7 1.7 2.3 2.8 4.1 2.8h2.9c-.1-11.7-.2-26.7-.2-37z" />
        </G>
      </Svg>
    );
  }
}

export default UndoIcon;
