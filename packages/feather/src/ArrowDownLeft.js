import React, { PureComponent } from 'react';
import Svg, { G, Line, Polyline } from 'react-native-svg';
import PropTypes from 'prop-types';

class ArrowDownLeftIcon extends PureComponent {
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
          <Line x1="17" y1="7" x2="7" y2="17" />
          <Polyline points="17 17 7 17 7 7" />
        </G>
      </Svg>
    );
  }
}

export default ArrowDownLeftIcon;
