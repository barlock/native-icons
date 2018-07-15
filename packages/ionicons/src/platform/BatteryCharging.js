import { Platform } from 'react-native';
import IosBatteryCharging from '../ios/BatteryCharging';
import MdBatteryCharging from '../md/BatteryCharging';

export default Platform.OS === 'ios' ? IosBatteryCharging : MdBatteryCharging;