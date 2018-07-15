import { Platform } from 'react-native';
import IosPower from '../ios/Power';
import MdPower from '../md/Power';

export default Platform.OS === 'ios' ? IosPower : MdPower;