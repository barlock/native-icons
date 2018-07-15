import React, { PureComponent } from 'react';
import Svg, { G, Polyline, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class CornerRightDownIcon extends PureComponent {
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
          <Polyline points="10 15 15 20 20 15" />
          <Path d="M4 4h7a4 4 0 0 1 4 4v12" />
        </G>
      </Svg>
    );
  }
}

export default CornerRightDownIcon;
