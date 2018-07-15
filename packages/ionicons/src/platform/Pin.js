import { Platform } from 'react-native';
import IosPin from '../ios/Pin';
import MdPin from '../md/Pin';

export default Platform.OS === 'ios' ? IosPin : MdPin;