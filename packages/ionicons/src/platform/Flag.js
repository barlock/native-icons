import { Platform } from 'react-native';
import IosFlag from '../ios/Flag';
import MdFlag from '../md/Flag';

export default Platform.OS === 'ios' ? IosFlag : MdFlag;