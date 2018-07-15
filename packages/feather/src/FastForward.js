import React, { PureComponent } from 'react';
import Svg, { G, Polygon } from 'react-native-svg';
import PropTypes from 'prop-types';

class FastForwardIcon extends PureComponent {
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
          <Polygon points="13 19 22 12 13 5 13 19" />
          <Polygon points="2 19 11 12 2 5 2 19" />
        </G>
      </Svg>
    );
  }
}

export default FastForwardIcon;
