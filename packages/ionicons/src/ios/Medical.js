import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class MedicalIcon extends PureComponent {
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
          <Path d="M430.3 174.3l-16.5-28.6c-4.3-7.4-13.8-10-21.2-5.7L294 197c-2.7 1.5-6-.4-6-3.5v-114c0-8.6-6.9-15.5-15.5-15.5h-33c-8.6 0-15.5 6.9-15.5 15.5v114.1c0 3.1-3.3 5-6 3.5l-98.6-57c-7.4-4.3-16.9-1.7-21.2 5.7l-16.5 28.6c-4.3 7.4-1.7 16.9 5.7 21.1l98.7 57.1c2.7 1.5 2.7 5.4 0 6.9l-98.7 57.1c-7.4 4.3-9.9 13.7-5.7 21.1l16.5 28.6c4.3 7.4 13.8 10 21.2 5.7l98.6-57c2.7-1.5 6 .4 6 3.5v114.1c0 8.6 6.9 15.5 15.5 15.5h33c8.6 0 15.5-6.9 15.5-15.5V318.4c0-3.1 3.4-5 6-3.5l98.6 57c7.4 4.3 16.9 1.7 21.2-5.7l16.5-28.6c4.3-7.4 1.7-16.9-5.7-21.1l-98.7-57.1c-2.7-1.5-2.7-5.4 0-6.9l98.7-57.1c7.4-4.2 9.9-13.7 5.7-21.1z" />
        </G>
      </Svg>
    );
  }
}

export default MedicalIcon;
