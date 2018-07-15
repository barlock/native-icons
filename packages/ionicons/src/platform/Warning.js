import { Platform } from 'react-native';
import IosWarning from '../ios/Warning';
import MdWarning from '../md/Warning';

export default Platform.OS === 'ios' ? IosWarning : MdWarning;