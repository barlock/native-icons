import { Platform } from 'react-native';
import IosHeartHalf from '../ios/HeartHalf';
import MdHeartHalf from '../md/HeartHalf';

export default Platform.OS === 'ios' ? IosHeartHalf : MdHeartHalf;