import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class CalculatorIcon extends PureComponent {
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
          <Path d="M368 48H144c-26.6 0-48 21.6-48 48v320c0 26.4 21.4 48 48 48h224c26.4 0 48-21.6 48-48V96c0-26.4-21.4-48-48-48zM200 416h-48v-48h48v48zm0-88h-48v-48h48v48zm0-88h-48v-48h48v48zm80 176h-48v-48h48v48zm0-88h-48v-48h48v48zm0-88h-48v-48h48v48zm80 176h-48V280h48v136zm0-176h-48v-48h48v48zm0-96H152V96h208v48z" />
        </G>
      </Svg>
    );
  }
}

export default CalculatorIcon;
