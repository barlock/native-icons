import React, { PureComponent } from 'react';
import Svg, { G, Polyline, Path, Rect } from 'react-native-svg';
import PropTypes from 'prop-types';

class PrinterIcon extends PureComponent {
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
          {...otherProps}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Polyline points="6 9 6 2 18 2 18 9" />
          <Path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <Rect x="6" y="14" width="12" height="8" />
        </G>
      </Svg>
    );
  }
}

export default PrinterIcon;
