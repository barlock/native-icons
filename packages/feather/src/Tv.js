import React, { PureComponent } from 'react';
import Svg, { G, Rect, Polyline } from 'react-native-svg';
import PropTypes from 'prop-types';

class TvIcon extends PureComponent {
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
          <Rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
          <Polyline points="17 2 12 7 7 2" />
        </G>
      </Svg>
    );
  }
}

export default TvIcon;
