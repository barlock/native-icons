import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class NuclearIcon extends PureComponent {
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
          <Path d="M336 272c0-29.8-16.3-55.7-40.4-69.5l73.1-124.1C335.6 59.1 297.1 48 256 48c-41.2 0-79.9 11.2-113.1 30.6l71.6 125C191.4 217.6 176 243 176 272H32c0 83.3 46.9 153.4 114.4 192l70.1-122.4c11.7 6.6 25.1 10.4 39.5 10.4 14.3 0 27.7-3.8 39.3-10.3L365.6 464C433.1 425.4 480 355.3 480 272H336z" />
        </G>
      </Svg>
    );
  }
}

export default NuclearIcon;
