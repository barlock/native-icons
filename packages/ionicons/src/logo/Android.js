import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class AndroidIcon extends PureComponent {
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
          <Path d="M144 268.4V358c0 6.9 4.5 14 11.4 14H184v52c0 13.3 10.7 24 24 24s24-10.7 24-24v-52h49v52c0 7.5 3.4 14.2 8.8 18.6 3.9 3.4 9.1 5.4 14.7 5.4h.5c13.3 0 24-10.7 24-24v-52h27.6c7 0 11.4-7.1 11.4-13.9V192H144v76.4zM408 176c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24s24-10.7 24-24v-96c0-13.3-10.7-24-24-24zM104 176c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24s24-10.7 24-24v-96c0-13.3-10.7-24-24-24z" />
          <G>
            <Path d="M311.2 89.1l18.5-21.9c.4-.5-.2-1.6-1.3-2.5-1.1-.8-2.4-1-2.7-.4l-19.2 22.8c-13.6-5.4-30.2-8.8-50.6-8.8-20.5-.1-37.2 3.2-50.8 8.5l-19-22.4c-.4-.5-1.6-.4-2.7.4s-1.7 1.8-1.3 2.5l18.3 21.6c-48.2 20.9-55.4 72.2-56.4 87.2h223.6c-.9-15.1-8-65.7-56.4-87zm-104.4 49.8c-7.4 0-13.5-6-13.5-13.3 0-7.3 6-13.3 13.5-13.3 7.4 0 13.5 6 13.5 13.3 0 7.3-6 13.3-13.5 13.3zm98.4 0c-7.4 0-13.5-6-13.5-13.3 0-7.3 6-13.3 13.5-13.3 7.4 0 13.5 6 13.5 13.3 0 7.3-6.1 13.3-13.5 13.3z" />
          </G>
        </G>
      </Svg>
    );
  }
}

export default AndroidIcon;
