import { Platform } from 'react-native';
import IosCode from '../ios/Code';
import MdCode from '../md/Code';

export default Platform.OS === 'ios' ? IosCode : MdCode;