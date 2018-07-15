import { Platform } from 'react-native';
import IosVolumeLow from '../ios/VolumeLow';
import MdVolumeLow from '../md/VolumeLow';

export default Platform.OS === 'ios' ? IosVolumeLow : MdVolumeLow;