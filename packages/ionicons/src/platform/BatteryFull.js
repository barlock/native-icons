import { Platform } from 'react-native';
import IosBatteryFull from '../ios/BatteryFull';
import MdBatteryFull from '../md/BatteryFull';

export default Platform.OS === 'ios' ? IosBatteryFull : MdBatteryFull;