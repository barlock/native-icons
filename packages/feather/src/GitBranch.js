import React, { PureComponent } from 'react';
import Svg, { G, Line, Circle, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class GitBranchIcon extends PureComponent {
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
          <Line x1="6" y1="3" x2="6" y2="15" />
          <Circle cx="18" cy="6" r="3" />
          <Circle cx="6" cy="18" r="3" />
          <Path d="M18 9a9 9 0 0 1-9 9" />
        </G>
      </Svg>
    );
  }
}

export default GitBranchIcon;
