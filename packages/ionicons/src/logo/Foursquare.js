import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class FoursquareIcon extends PureComponent {
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
          <Path d="M376.764 32H138.541C105.666 32 96 56.798 96 72.414v379.64c0 17.591 9.425 24.117 14.718 26.267 5.299 2.155 19.916 3.971 28.673-6.168 0 0 112.469-130.895 114.4-132.834 2.921-2.93 2.921-2.93 5.844-2.93h72.767c30.574 0 35.49-21.869 38.684-34.752 2.659-10.789 32.489-163.962 42.452-212.559C421.143 51.993 411.745 32 376.764 32zm-5.678 269.637c2.659-10.789 32.489-163.962 42.452-212.559m-50.846 7.592l-9.999 51.734c-1.195 5.65-8.287 11.595-14.863 11.595h-95.917C231.473 160 224 166.138 224 176.602v13.448c0 10.473 7.519 17.894 17.965 17.894h81.848c7.374 0 14.61 8.109 13.016 16.005-1.602 7.908-9.086 46.569-9.984 50.89-.902 4.328-5.845 11.725-14.611 11.725h-64.269c-11.705 0-15.244 1.533-23.074 11.293-7.837 9.77-78.256 94.592-78.256 94.592-.713.822-1.41.584-1.41-.312V95.896c0-6.684 5.793-14.523 14.479-14.523h191.173c7.035-.001 13.611 6.631 11.815 15.297z" />
        </G>
      </Svg>
    );
  }
}

export default FoursquareIcon;
