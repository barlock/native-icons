import { Platform } from 'react-native';
import IosRewind from '../ios/Rewind';
import MdRewind from '../md/Rewind';

export default Platform.OS === 'ios' ? IosRewind : MdRewind;