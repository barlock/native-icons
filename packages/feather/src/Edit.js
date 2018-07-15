import React, { PureComponent } from 'react';
import Svg, { G, Path, Polygon } from 'react-native-svg';
import PropTypes from 'prop-types';

class EditIcon extends PureComponent {
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
          <Path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />
          <Polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
        </G>
      </Svg>
    );
  }
}

export default EditIcon;
