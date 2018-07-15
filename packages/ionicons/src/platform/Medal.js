import { Platform } from 'react-native';
import IosMedal from '../ios/Medal';
import MdMedal from '../md/Medal';

export default Platform.OS === 'ios' ? IosMedal : MdMedal;