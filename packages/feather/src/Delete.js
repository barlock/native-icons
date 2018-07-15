import React, { PureComponent } from 'react';
import Svg, { G, Path, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class DeleteIcon extends PureComponent {
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
      <Svg width={size} height={size} viewBox="0 0 24 24">
        <G
          fill="none"
          stroke={color}
          {...otherProps}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
          <Line x1="18" y1="9" x2="12" y2="15" />
          <Line x1="12" y1="9" x2="18" y2="15" />
        </G>
      </Svg>
    );
  }
}

export default DeleteIcon;
