import React, { PureComponent } from 'react';
import Svg, { G, Polyline } from 'react-native-svg';
import PropTypes from 'prop-types';

class ChevronLeftIcon extends PureComponent {
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
          <Polyline points="15 18 9 12 15 6" />
        </G>
      </Svg>
    );
  }
}

export default ChevronLeftIcon;
