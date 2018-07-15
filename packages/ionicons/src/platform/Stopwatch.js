import { Platform } from 'react-native';
import IosStopwatch from '../ios/Stopwatch';
import MdStopwatch from '../md/Stopwatch';

export default Platform.OS === 'ios' ? IosStopwatch : MdStopwatch;