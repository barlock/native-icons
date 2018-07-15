import React, { PureComponent } from 'react';
import Svg, { G, Polygon } from 'react-native-svg';
import PropTypes from 'prop-types';

class RewindIcon extends PureComponent {
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
          <Polygon points="11 19 2 12 11 5 11 19" />
          <Polygon points="22 19 13 12 22 5 22 19" />
        </G>
      </Svg>
    );
  }
}

export default RewindIcon;
