import { Platform } from 'react-native';
import IosHeartEmpty from '../ios/HeartEmpty';
import MdHeartEmpty from '../md/HeartEmpty';

export default Platform.OS === 'ios' ? IosHeartEmpty : MdHeartEmpty;