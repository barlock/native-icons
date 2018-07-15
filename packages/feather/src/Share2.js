import React, { PureComponent } from 'react';
import Svg, { G, Circle, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

class Share2Icon extends PureComponent {
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
          <Circle cx="18" cy="5" r="3" />
          <Circle cx="6" cy="12" r="3" />
          <Circle cx="18" cy="19" r="3" />
          <Line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <Line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </G>
      </Svg>
    );
  }
}

export default Share2Icon;
