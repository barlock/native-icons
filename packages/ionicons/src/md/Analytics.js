import React, { PureComponent } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

class AnalyticsIcon extends PureComponent {
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
          <Path d="M379.4 178.3l-87.2 133.4C299 320 303 330.5 303 342c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-3 .3-6 .8-8.9l-57.6-33.5c-8.6 8.3-20.3 13.4-33.3 13.4-8.6 0-16.6-2.3-23.6-6.2L32 364.2v57.2c0 23.5 19.2 42.7 42.7 42.7h362.7c23.5 0 42.7-19.2 42.7-42.7V208.8l-58.6-38.9c-8.1 6.3-18.3 10.1-29.4 10.1-4.4 0-8.7-.6-12.7-1.7z" />
          <Path d="M117 217c26.5 0 48 21.5 48 48 0 2.1-.2 4.2-.4 6.2l60.1 33.6c8.3-6.8 18.8-10.8 30.4-10.8 3.6 0 7.1.4 10.4 1.1l87.4-135.4c-5.6-7.8-8.9-17.4-8.9-27.8 0-26.5 21.5-48 48-48s48 21.5 48 48c0 3.9-.5 7.7-1.3 11.3l41.3 27.6V90.7c0-23.5-19.2-42.7-42.7-42.7H74.7C51.2 48 32 67.2 32 90.7V320l40-38.3c-1.9-5.2-3-10.8-3-16.7 0-26.5 21.5-48 48-48z" />
        </G>
      </Svg>
    );
  }
}

export default AnalyticsIcon;
