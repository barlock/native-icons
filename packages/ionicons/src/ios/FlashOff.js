import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class FlashOffIcon extends PureComponent {
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
          <Path d="M382.1 442.7L154.5 55c-4-6.7-12.7-9-19.5-5.1-6.8 3.9-9.1 12.6-5.1 19.3L357.5 457c2.6 4.5 7.4 7 12.3 7 2.4 0 4.9-.6 7.2-1.9 6.7-4 9-12.6 5.1-19.4zM324.6 313.3l57.9-75.8c3.8-5.6.2-13.4-6.3-13.4h-104l52.4 89.2zM320.4 37.1c.9-4.5-4.6-7.1-7.2-3.4L227 146.9l42.4 72.3 51-182.1zM187.4 198.7l-57.9 75.8c-3.8 5.6-.2 13.4 6.3 13.4h103.9l-52.3-89.2zM191.6 474.9c-.9 4.5 4.6 7.1 7.2 3.4L285 365.1l-42.4-72.3-51 182.1z" />
        </G>
      </Svg>
    );
  }
}

export default FlashOffIcon;
