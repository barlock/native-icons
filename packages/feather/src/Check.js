import React, { PureComponent } from 'react';
import Svg, { G, Polyline } from 'react-native-svg';
import PropTypes from 'prop-types';

class CheckIcon extends PureComponent {
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
          <Polyline points="20 6 9 17 4 12" />
        </G>
      </Svg>
    );
  }
}

export default CheckIcon;
