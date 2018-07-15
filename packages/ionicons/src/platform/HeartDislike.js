import { Platform } from 'react-native';
import IosHeartDislike from '../ios/HeartDislike';
import MdHeartDislike from '../md/HeartDislike';

export default Platform.OS === 'ios' ? IosHeartDislike : MdHeartDislike;