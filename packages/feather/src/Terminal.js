import React, { PureComponent } from 'react';
import Svg, { G, Polyline, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class TerminalIcon extends PureComponent {
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
          <Polyline points="4 17 10 11 4 5" />
          <Line x1="12" y1="19" x2="20" y2="19" />
        </G>
      </Svg>
    );
  }
}

export default TerminalIcon;
