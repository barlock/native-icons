import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class FilingIcon extends PureComponent {
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
          <Path d="M424 64H88c-22 0-40 18-40 40v304c0 22 18 40 40 40h336c22 0 40-18 40-40V104c0-22-18-40-40-40zm12 176c0 8.8-7.2 16-16 16h-86.8c-6.8 0-12.8 4.2-15.1 10.6C314 278.2 303.8 288 292 288h-72c-11.9 0-22.1-9.8-26.1-21.4-2.2-6.4-8.3-10.6-15.1-10.6H92c-8.8 0-16-7.2-16-16V108c0-8.8 7.2-16 16-16h328c8.8 0 16 7.2 16 16v132z" />
          <Path d="M386 156H126c-7.7 0-14-6.3-14-14s6.3-14 14-14h260c7.7 0 14 6.3 14 14s-6.3 14-14 14zM386 220H126c-7.7 0-14-6.3-14-14s6.3-14 14-14h260c7.7 0 14 6.3 14 14s-6.3 14-14 14z" />
        </G>
      </Svg>
    );
  }
}

export default FilingIcon;
