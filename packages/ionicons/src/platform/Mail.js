import { Platform } from 'react-native';
import IosMail from '../ios/Mail';
import MdMail from '../md/Mail';

export default Platform.OS === 'ios' ? IosMail : MdMail;