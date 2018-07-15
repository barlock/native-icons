import { Platform } from 'react-native';
import IosSave from '../ios/Save';
import MdSave from '../md/Save';

export default Platform.OS === 'ios' ? IosSave : MdSave;