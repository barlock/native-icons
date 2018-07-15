import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class SwitchIcon extends PureComponent {
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
          <Path d="M168 216h94.9c14.5 14.8 34.7 24 57.1 24 44.2 0 80-35.8 80-80s-35.8-80-80-80c-22.4 0-42.6 9.2-57.1 24H168c-30.8 0-56 25.2-56 56s25.2 56 56 56zm-16.9-72.9c4.6-4.6 10.6-7.1 16.9-7.1h75.7c-2.4 7.6-3.7 15.6-3.7 24s1.3 16.4 3.7 24H168c-6.3 0-12.4-2.5-16.9-7.1-4.6-4.6-7.1-10.6-7.1-16.9s2.5-12.4 7.1-16.9zM344 296h-94.9c-14.5-14.8-34.7-24-57.1-24-44.2 0-80 35.8-80 80s35.8 80 80 80c22.4 0 42.6-9.2 57.1-24H344c30.8 0 56-25.2 56-56s-25.2-56-56-56zm16.9 72.9c-4.6 4.6-10.6 7.1-16.9 7.1h-75.7c2.4-7.6 3.7-15.6 3.7-24s-1.3-16.4-3.7-24H344c6.3 0 12.4 2.5 16.9 7.1 4.6 4.6 7.1 10.6 7.1 16.9s-2.5 12.4-7.1 16.9z" />
        </G>
      </Svg>
    );
  }
}

export default SwitchIcon;
