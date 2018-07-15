import React, { PureComponent } from 'react';
import Svg, { G, Polygon } from 'react-native-svg';
import PropTypes from 'prop-types';

class Navigation2Icon extends PureComponent {
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
          <Polygon points="12 2 19 21 12 17 5 21 12 2" />
        </G>
      </Svg>
    );
  }
}

export default Navigation2Icon;
