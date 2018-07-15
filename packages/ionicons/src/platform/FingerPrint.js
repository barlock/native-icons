import { Platform } from 'react-native';
import IosFingerPrint from '../ios/FingerPrint';
import MdFingerPrint from '../md/FingerPrint';

export default Platform.OS === 'ios' ? IosFingerPrint : MdFingerPrint;