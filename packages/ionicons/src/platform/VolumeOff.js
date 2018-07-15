import { Platform } from 'react-native';
import IosVolumeOff from '../ios/VolumeOff';
import MdVolumeOff from '../md/VolumeOff';

export default Platform.OS === 'ios' ? IosVolumeOff : MdVolumeOff;