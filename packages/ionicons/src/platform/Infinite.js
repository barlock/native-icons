import { Platform } from 'react-native';
import IosInfinite from '../ios/Infinite';
import MdInfinite from '../md/Infinite';

export default Platform.OS === 'ios' ? IosInfinite : MdInfinite;