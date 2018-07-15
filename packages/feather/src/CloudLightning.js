import React, { PureComponent } from 'react';
import Svg, { G, Path, Polyline } from 'react-native-svg';
import PropTypes from 'prop-types';

class CloudLightningIcon extends PureComponent {
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
          <Path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" />
          <Polyline points="13 11 9 17 15 17 11 23" />
        </G>
      </Svg>
    );
  }
}

export default CloudLightningIcon;
