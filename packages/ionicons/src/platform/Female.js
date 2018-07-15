import { Platform } from 'react-native';
import IosFemale from '../ios/Female';
import MdFemale from '../md/Female';

export default Platform.OS === 'ios' ? IosFemale : MdFemale;