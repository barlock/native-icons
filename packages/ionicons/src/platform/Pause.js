import { Platform } from 'react-native';
import IosPause from '../ios/Pause';
import MdPause from '../md/Pause';

export default Platform.OS === 'ios' ? IosPause : MdPause;