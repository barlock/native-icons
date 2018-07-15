import React, { PureComponent } from 'react';
import Svg, { G, Polygon, Polyline } from 'react-native-svg';
import PropTypes from 'prop-types';

class LayersIcon extends PureComponent {
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
          <Polygon points="12 2 2 7 12 12 22 7 12 2" />
          <Polyline points="2 17 12 22 22 17" />
          <Polyline points="2 12 12 17 22 12" />
        </G>
      </Svg>
    );
  }
}

export default LayersIcon;
