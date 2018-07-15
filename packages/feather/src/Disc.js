import React, { PureComponent } from 'react';
import Svg, { G, Circle } from 'react-native-svg';
import PropTypes from 'prop-types';

class DiscIcon extends PureComponent {
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
          <Circle cx="12" cy="12" r="10" />
          <Circle cx="12" cy="12" r="3" />
        </G>
      </Svg>
    );
  }
}

export default DiscIcon;
