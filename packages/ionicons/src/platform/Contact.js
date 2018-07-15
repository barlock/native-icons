import { Platform } from 'react-native';
import IosContact from '../ios/Contact';
import MdContact from '../md/Contact';

export default Platform.OS === 'ios' ? IosContact : MdContact;