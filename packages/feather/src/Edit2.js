import React, { PureComponent } from 'react';
import Svg, { G, Polygon } from 'react-native-svg';
import PropTypes from 'prop-types';

class Edit2Icon extends PureComponent {
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
          <Polygon points="16 3 21 8 8 21 3 21 3 16 16 3" />
        </G>
      </Svg>
    );
  }
}

export default Edit2Icon;
