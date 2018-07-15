import { Platform } from 'react-native';
import IosMedical from '../ios/Medical';
import MdMedical from '../md/Medical';

export default Platform.OS === 'ios' ? IosMedical : MdMedical;