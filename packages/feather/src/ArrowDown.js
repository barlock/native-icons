import React, { PureComponent } from 'react';
import Svg, { G, Line, Polyline } from 'react-native-svg';
import PropTypes from 'prop-types';

class ArrowDownIcon extends PureComponent {
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
          <Line x1="12" y1="5" x2="12" y2="19" />
          <Polyline points="19 12 12 19 5 12" />
        </G>
      </Svg>
    );
  }
}

export default ArrowDownIcon;
