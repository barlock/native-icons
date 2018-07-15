import { Platform } from 'react-native';
import IosStarHalf from '../ios/StarHalf';
import MdStarHalf from '../md/StarHalf';

export default Platform.OS === 'ios' ? IosStarHalf : MdStarHalf;