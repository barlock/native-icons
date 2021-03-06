import React, { PureComponent } from 'react';
import Svg, { G, Line, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class CloudDrizzleIcon extends PureComponent {
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
          <Line x1="8" y1="19" x2="8" y2="21" />
          <Line x1="8" y1="13" x2="8" y2="15" />
          <Line x1="16" y1="19" x2="16" y2="21" />
          <Line x1="16" y1="13" x2="16" y2="15" />
          <Line x1="12" y1="21" x2="12" y2="23" />
          <Line x1="12" y1="15" x2="12" y2="17" />
          <Path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
        </G>
      </Svg>
    );
  }
}

export default CloudDrizzleIcon;
