import { Platform } from 'react-native';
import IosPint from '../ios/Pint';
import MdPint from '../md/Pint';

export default Platform.OS === 'ios' ? IosPint : MdPint;