import { Platform } from 'react-native';
import IosEyeOff from '../ios/EyeOff';
import MdEyeOff from '../md/EyeOff';

export default Platform.OS === 'ios' ? IosEyeOff : MdEyeOff;