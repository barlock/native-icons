import { Platform } from 'react-native';
import IosWatch from '../ios/Watch';
import MdWatch from '../md/Watch';

export default Platform.OS === 'ios' ? IosWatch : MdWatch;