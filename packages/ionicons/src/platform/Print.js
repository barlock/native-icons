import { Platform } from 'react-native';
import IosPrint from '../ios/Print';
import MdPrint from '../md/Print';

export default Platform.OS === 'ios' ? IosPrint : MdPrint;