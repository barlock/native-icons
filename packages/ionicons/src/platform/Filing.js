import { Platform } from 'react-native';
import IosFiling from '../ios/Filing';
import MdFiling from '../md/Filing';

export default Platform.OS === 'ios' ? IosFiling : MdFiling;