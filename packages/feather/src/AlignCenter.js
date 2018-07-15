import React, { PureComponent } from 'react';
import Svg, { G, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class AlignCenterIcon extends PureComponent {
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
          {...otherProps}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Line x1="18" y1="10" x2="6" y2="10" />
          <Line x1="21" y1="6" x2="3" y2="6" />
          <Line x1="21" y1="14" x2="3" y2="14" />
          <Line x1="18" y1="18" x2="6" y2="18" />
        </G>
      </Svg>
    );
  }
}

export default AlignCenterIcon;
