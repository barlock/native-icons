import { Platform } from 'react-native';
import IosTime from '../ios/Time';
import MdTime from '../md/Time';

export default Platform.OS === 'ios' ? IosTime : MdTime;