import { Platform } from 'react-native';
import IosSwap from '../ios/Swap';
import MdSwap from '../md/Swap';

export default Platform.OS === 'ios' ? IosSwap : MdSwap;