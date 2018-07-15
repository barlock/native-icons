import { Platform } from 'react-native';
import IosFastforward from '../ios/Fastforward';
import MdFastforward from '../md/Fastforward';

export default Platform.OS === 'ios' ? IosFastforward : MdFastforward;