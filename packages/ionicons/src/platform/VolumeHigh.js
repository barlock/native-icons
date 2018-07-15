import { Platform } from 'react-native';
import IosVolumeHigh from '../ios/VolumeHigh';
import MdVolumeHigh from '../md/VolumeHigh';

export default Platform.OS === 'ios' ? IosVolumeHigh : MdVolumeHigh;