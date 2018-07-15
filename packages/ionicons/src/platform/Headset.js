import { Platform } from 'react-native';
import IosHeadset from '../ios/Headset';
import MdHeadset from '../md/Headset';

export default Platform.OS === 'ios' ? IosHeadset : MdHeadset;