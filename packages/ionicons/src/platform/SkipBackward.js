import { Platform } from 'react-native';
import IosSkipBackward from '../ios/SkipBackward';
import MdSkipBackward from '../md/SkipBackward';

export default Platform.OS === 'ios' ? IosSkipBackward : MdSkipBackward;