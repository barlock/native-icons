import { Platform } from 'react-native';
import IosSkipForward from '../ios/SkipForward';
import MdSkipForward from '../md/SkipForward';

export default Platform.OS === 'ios' ? IosSkipForward : MdSkipForward;