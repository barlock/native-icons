import { Platform } from 'react-native';
import IosMicOff from '../ios/MicOff';
import MdMicOff from '../md/MicOff';

export default Platform.OS === 'ios' ? IosMicOff : MdMicOff;