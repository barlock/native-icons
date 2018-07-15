import React, { PureComponent } from 'react';
import Svg, { G, Rect, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class FilmIcon extends PureComponent {
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
          <Rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
          <Line x1="7" y1="2" x2="7" y2="22" />
          <Line x1="17" y1="2" x2="17" y2="22" />
          <Line x1="2" y1="12" x2="22" y2="12" />
          <Line x1="2" y1="7" x2="7" y2="7" />
          <Line x1="2" y1="17" x2="7" y2="17" />
          <Line x1="17" y1="17" x2="22" y2="17" />
          <Line x1="17" y1="7" x2="22" y2="7" />
        </G>
      </Svg>
    );
  }
}

export default FilmIcon;
