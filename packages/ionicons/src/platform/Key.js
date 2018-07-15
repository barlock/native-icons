import { Platform } from 'react-native';
import IosKey from '../ios/Key';
import MdKey from '../md/Key';

export default Platform.OS === 'ios' ? IosKey : MdKey;