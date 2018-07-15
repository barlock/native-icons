import { Platform } from 'react-native';
import IosCloud from '../ios/Cloud';
import MdCloud from '../md/Cloud';

export default Platform.OS === 'ios' ? IosCloud : MdCloud;