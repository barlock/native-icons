import { Platform } from 'react-native';
import IosClock from '../ios/Clock';
import MdClock from '../md/Clock';

export default Platform.OS === 'ios' ? IosClock : MdClock;