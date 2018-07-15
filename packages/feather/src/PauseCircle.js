import React, { PureComponent } from 'react';
import Svg, { G, Circle, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class PauseCircleIcon extends PureComponent {
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
          <Circle cx="12" cy="12" r="10" />
          <Line x1="10" y1="15" x2="10" y2="9" />
          <Line x1="14" y1="15" x2="14" y2="9" />
        </G>
      </Svg>
    );
  }
}

export default PauseCircleIcon;
