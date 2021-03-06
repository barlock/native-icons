import React, { PureComponent } from 'react';
import Svg, { G, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class LoaderIcon extends PureComponent {
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
          <Line x1="12" y1="2" x2="12" y2="6" />
          <Line x1="12" y1="18" x2="12" y2="22" />
          <Line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
          <Line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
          <Line x1="2" y1="12" x2="6" y2="12" />
          <Line x1="18" y1="12" x2="22" y2="12" />
          <Line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
          <Line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
        </G>
      </Svg>
    );
  }
}

export default LoaderIcon;
