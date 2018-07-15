import { Platform } from 'react-native';
import IosWifi from '../ios/Wifi';
import MdWifi from '../md/Wifi';

export default Platform.OS === 'ios' ? IosWifi : MdWifi;