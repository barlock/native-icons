import { Platform } from 'react-native';
import IosMale from '../ios/Male';
import MdMale from '../md/Male';

export default Platform.OS === 'ios' ? IosMale : MdMale;