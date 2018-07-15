import { Platform } from 'react-native';
import IosCopy from '../ios/Copy';
import MdCopy from '../md/Copy';

export default Platform.OS === 'ios' ? IosCopy : MdCopy;