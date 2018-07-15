import React, { PureComponent } from 'react';
import Svg, { G, Ellipse, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class DatabaseIcon extends PureComponent {
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
          <Ellipse cx="12" cy="5" rx="9" ry="3" />
          <Path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <Path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </G>
      </Svg>
    );
  }
}

export default DatabaseIcon;
