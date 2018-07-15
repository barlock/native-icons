import React, { PureComponent } from 'react';
import Svg, { G, Circle, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class ApertureIcon extends PureComponent {
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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...otherProps}
        >
          <Circle cx="12" cy="12" r="10" />
          <Line x1="14.31" y1="8" x2="20.05" y2="17.94" />
          <Line x1="9.69" y1="8" x2="21.17" y2="8" />
          <Line x1="7.38" y1="12" x2="13.12" y2="2.06" />
          <Line x1="9.69" y1="16" x2="3.95" y2="6.06" />
          <Line x1="14.31" y1="16" x2="2.83" y2="16" />
          <Line x1="16.62" y1="12" x2="10.88" y2="21.94" />
        </G>
      </Svg>
    );
  }
}

export default ApertureIcon;
