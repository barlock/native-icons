import { Platform } from 'react-native';
import IosAlarm from '../ios/Alarm';
import MdAlarm from '../md/Alarm';

export default Platform.OS === 'ios' ? IosAlarm : MdAlarm;