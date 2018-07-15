import React, { PureComponent } from 'react';
import Svg, { G, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class ListIcon extends PureComponent {
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
          <Line x1="8" y1="6" x2="21" y2="6" />
          <Line x1="8" y1="12" x2="21" y2="12" />
          <Line x1="8" y1="18" x2="21" y2="18" />
          <Line x1="3" y1="6" x2="3" y2="6" />
          <Line x1="3" y1="12" x2="3" y2="12" />
          <Line x1="3" y1="18" x2="3" y2="18" />
        </G>
      </Svg>
    );
  }
}

export default ListIcon;
