import React, { PureComponent } from 'react';
import Svg, { G, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class MinusIcon extends PureComponent {
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
          <Line x1="5" y1="12" x2="19" y2="12" />
        </G>
      </Svg>
    );
  }
}

export default MinusIcon;
