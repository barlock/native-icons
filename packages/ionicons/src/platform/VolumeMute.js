import { Platform } from 'react-native';
import IosVolumeMute from '../ios/VolumeMute';
import MdVolumeMute from '../md/VolumeMute';

export default Platform.OS === 'ios' ? IosVolumeMute : MdVolumeMute;