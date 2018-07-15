import React, { PureComponent } from 'react';
import Svg, { G, Path, Polyline, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class LogInIcon extends PureComponent {
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
          <Path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
          <Polyline points="10 17 15 12 10 7" />
          <Line x1="15" y1="12" x2="3" y2="12" />
        </G>
      </Svg>
    );
  }
}

export default LogInIcon;
