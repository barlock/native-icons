import { Platform } from 'react-native';
import IosContacts from '../ios/Contacts';
import MdContacts from '../md/Contacts';

export default Platform.OS === 'ios' ? IosContacts : MdContacts;