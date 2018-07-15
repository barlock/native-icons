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
        <G {...otherProps} fill={color}>
          <Path d="M405.3 32H106.7C83.2 32 64 51.2 64 74.7v362.7c0 23.5 19.2 42.7 42.7 42.7h298.7c23.5 0 42.7-19.2 42.7-42.7V74.7C448 51.2 428.8 32 405.3 32zm-4 405.3H110.7c-2.2 0-4-1.8-4-4V78.7c0-2.2 1.8-4 4-4h290.7c2.2 0 4 1.8 4 4v354.7c-.1 2.1-1.9 3.9-4.1 3.9z" />
          <Path d="M145 194v204c0 1.1.9 2 2 2h218c1.1 0 2-.9 2-2V194c0-1.1-.9-2-2-2H147c-1.1 0-2 .9-2 2zM145 114.7v34c0 1.1.9 2 2 2h171c1.1 0 2-.9 2-2v-34c0-1.1-.9-2-2-2H147c-1.1 0-2 .9-2 2z" />
        </G>
      </Svg>
    );
  }
}

export default TodayIcon;
