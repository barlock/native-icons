import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class ChatboxesIcon extends PureComponent {
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
          <Path d="M391.553 64H57.607C53.131 64 48 67.745 48 72.159v214.217c0 4.413 5.131 8.624 9.607 8.624H115v88.894L205.128 295h186.425c4.477 0 7.447-4.211 7.447-8.624V72.159c0-4.414-2.971-8.159-7.447-8.159z" />
          <Path d="M456.396 127H424v166.57c0 15.987-6.915 26.43-25.152 26.43H218.096l-38.905 39h129.688L399 448v-89h57.396c4.478 0 7.604-4.262 7.604-8.682V136.103c0-4.414-3.126-9.103-7.604-9.103z" />
        </G>
      </Svg>
    );
  }
}

export default ChatboxesIcon;
