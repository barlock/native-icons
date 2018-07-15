import { Platform } from 'react-native';
import IosStarOutline from '../ios/StarOutline';
import MdStarOutline from '../md/StarOutline';

export default Platform.OS === 'ios' ? IosStarOutline : MdStarOutline;