import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class MicIcon extends PureComponent {
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
          <Path d="M256 320c37.712 0 68.571-30.924 68.571-68.714V100.714C324.571 62.924 293.712 32 256 32s-68.571 30.924-68.571 68.714v150.572c0 37.79 30.859 68.714 68.571 68.714zm121.139-75.452c0 68.714-58.282 116.815-121.139 116.815s-121.139-48.102-121.139-116.815H96c0 77.873 61.719 143.153 137.144 153.465V480h45.713v-81.987C354.281 386.561 416 322.421 416 244.548h-38.861z" />
        </G>
      </Svg>
    );
  }
}

export default MicIcon;
