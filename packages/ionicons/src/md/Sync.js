import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class SyncIcon extends PureComponent {
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
          <Path d="M256 93.09V32l-80 81.454 80 81.456v-61.093c65.996 0 120 54.982 120 122.183 0 20.363-5 39.714-14.004 57.016L391 342.547c15.996-25.457 25-54.988 25-86.547 0-89.599-72.002-162.91-160-162.91zm0 285.094c-66.001 0-120-54.988-120-122.184 0-20.363 5-39.709 13.999-57.02L121 169.454C104.999 193.89 96 224.436 96 256c0 89.599 72.002 162.91 160 162.91V480l80-81.453-80-81.457v61.094z" />
        </G>
      </Svg>
    );
  }
}

export default SyncIcon;
