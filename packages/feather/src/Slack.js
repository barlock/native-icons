import React, { PureComponent } from 'react';
import Svg, { G, Path, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class SlackIcon extends PureComponent {
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
          <Path d="M22.08 9C19.81 1.41 16.54-.35 9 1.92S-.35 7.46 1.92 15 7.46 24.35 15 22.08 24.35 16.54 22.08 9z" />
          <Line x1="12.57" y1="5.99" x2="16.15" y2="16.39" />
          <Line x1="7.85" y1="7.61" x2="11.43" y2="18.01" />
          <Line x1="16.39" y1="7.85" x2="5.99" y2="11.43" />
          <Line x1="18.01" y1="12.57" x2="7.61" y2="16.15" />
        </G>
      </Svg>
    );
  }
}

export default SlackIcon;
