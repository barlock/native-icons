import { Platform } from 'react-native';
import IosCash from '../ios/Cash';
import MdCash from '../md/Cash';

export default Platform.OS === 'ios' ? IosCash : MdCash;