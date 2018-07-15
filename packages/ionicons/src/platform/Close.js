import { Platform } from 'react-native';
import IosClose from '../ios/Close';
import MdClose from '../md/Close';

export default Platform.OS === 'ios' ? IosClose : MdClose;