import { Platform } from 'react-native';
import IosBaseball from '../ios/Baseball';
import MdBaseball from '../md/Baseball';

export default Platform.OS === 'ios' ? IosBaseball : MdBaseball;