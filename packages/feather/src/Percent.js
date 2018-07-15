import React, { PureComponent } from 'react';
import Svg, { G, Line, Circle } from 'react-native-svg';
import PropTypes from 'prop-types';

class PercentIcon extends PureComponent {
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
          <Line x1="19" y1="5" x2="5" y2="19" />
          <Circle cx="6.5" cy="6.5" r="2.5" />
          <Circle cx="17.5" cy="17.5" r="2.5" />
        </G>
      </Svg>
    );
  }
}

export default PercentIcon;
