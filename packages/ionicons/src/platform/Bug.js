import { Platform } from 'react-native';
import IosBug from '../ios/Bug';
import MdBug from '../md/Bug';

export default Platform.OS === 'ios' ? IosBug : MdBug;