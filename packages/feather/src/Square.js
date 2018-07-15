import React, { PureComponent } from 'react';
import Svg, { G, Rect } from 'react-native-svg';
import PropTypes from 'prop-types';

class SquareIcon extends PureComponent {
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
          <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        </G>
      </Svg>
    );
  }
}

export default SquareIcon;
