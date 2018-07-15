import { Platform } from 'react-native';
import IosBatteryDead from '../ios/BatteryDead';
import MdBatteryDead from '../md/BatteryDead';

export default Platform.OS === 'ios' ? IosBatteryDead : MdBatteryDead;