import React, { PureComponent } from 'react';
import Svg, { G, Path, Polyline } from 'react-native-svg';
import PropTypes from 'prop-types';

class SaveIcon extends PureComponent {
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
          <Path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
          <Polyline points="17 21 17 13 7 13 7 21" />
          <Polyline points="7 3 7 8 15 8" />
        </G>
      </Svg>
    );
  }
}

export default SaveIcon;
