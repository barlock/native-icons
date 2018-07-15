import React, { PureComponent } from 'react';
import Svg, { G, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class ItalicIcon extends PureComponent {
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
          <Line x1="19" y1="4" x2="10" y2="4" />
          <Line x1="14" y1="20" x2="5" y2="20" />
          <Line x1="15" y1="4" x2="9" y2="20" />
        </G>
      </Svg>
    );
  }
}

export default ItalicIcon;
