import React, { PureComponent } from 'react';
import Svg, { G, Path, Polyline, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class UploadIcon extends PureComponent {
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
          <Path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <Polyline points="17 8 12 3 7 8" />
          <Line x1="12" y1="3" x2="12" y2="15" />
        </G>
      </Svg>
    );
  }
}

export default UploadIcon;
