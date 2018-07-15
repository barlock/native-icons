import React, { PureComponent } from 'react';
import Svg, { G, Polygon } from 'react-native-svg';
import PropTypes from 'prop-types';

class NavigationIcon extends PureComponent {
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
          <Polygon points="3 11 22 2 13 21 11 13 3 11" />
        </G>
      </Svg>
    );
  }
}

export default NavigationIcon;
