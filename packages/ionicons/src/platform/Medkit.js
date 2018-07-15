import { Platform } from 'react-native';
import IosMedkit from '../ios/Medkit';
import MdMedkit from '../md/Medkit';

export default Platform.OS === 'ios' ? IosMedkit : MdMedkit;