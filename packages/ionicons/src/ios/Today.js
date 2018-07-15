import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class TodayIcon extends PureComponent {
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
      <Svg viewBox="0 0 512 512" height={size} width={size}>
        <G fill={color} {...otherProps}>
          <Path d="M388 32H124c-33.1 0-60 26.9-60 60v328c0 33.1 26.9 60 60 60h264c33.1 0 60-26.9 60-60V92c0-33.1-26.9-60-60-60zm32 388c0 17.6-14.4 32-32 32H124c-17.6 0-32-14.4-32-32V92c0-17.6 14.4-32 32-32h264c17.6 0 32 14.4 32 32v328z" />
          <Path d="M360 176H152c-13.2 0-24 10.8-24 24v192c0 13.2 10.8 24 24 24h208c13.2 0 24-10.8 24-24V200c0-13.2-10.8-24-24-24zM142 124h100c7.7 0 14-6.3 14-14s-6.3-14-14-14H142c-7.7 0-14 6.3-14 14s6.3 14 14 14z" />
        </G>
      </Svg>
    );
  }
}

export default TodayIcon;
