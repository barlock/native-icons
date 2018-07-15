import React, { PureComponent } from 'react';
import Svg, { G, Circle, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class ChromeIcon extends PureComponent {
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
          <Circle cx="12" cy="12" r="4" />
          <Line x1="21.17" y1="8" x2="12" y2="8" />
          <Line x1="3.95" y1="6.06" x2="8.54" y2="14" />
          <Line x1="10.88" y1="21.94" x2="15.46" y2="14" />
        </G>
      </Svg>
    );
  }
}

export default ChromeIcon;
