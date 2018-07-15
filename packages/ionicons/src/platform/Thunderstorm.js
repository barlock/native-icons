import { Platform } from 'react-native';
import IosThunderstorm from '../ios/Thunderstorm';
import MdThunderstorm from '../md/Thunderstorm';

export default Platform.OS === 'ios' ? IosThunderstorm : MdThunderstorm;