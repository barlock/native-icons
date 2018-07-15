import { Platform } from 'react-native';
import IosAttach from '../ios/Attach';
import MdAttach from '../md/Attach';

export default Platform.OS === 'ios' ? IosAttach : MdAttach;