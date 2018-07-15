import React, { PureComponent } from 'react';
import Svg, { G, Polyline } from 'react-native-svg';
import PropTypes from 'prop-types';

class ChevronsUpIcon extends PureComponent {
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
          <Polyline points="17 11 12 6 7 11" />
          <Polyline points="17 18 12 13 7 18" />
        </G>
      </Svg>
    );
  }
}

export default ChevronsUpIcon;
