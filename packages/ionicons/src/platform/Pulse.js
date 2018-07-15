import { Platform } from 'react-native';
import IosPulse from '../ios/Pulse';
import MdPulse from '../md/Pulse';

export default Platform.OS === 'ios' ? IosPulse : MdPulse;