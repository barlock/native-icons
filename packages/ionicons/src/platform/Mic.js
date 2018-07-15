import { Platform } from 'react-native';
import IosMic from '../ios/Mic';
import MdMic from '../md/Mic';

export default Platform.OS === 'ios' ? IosMic : MdMic;