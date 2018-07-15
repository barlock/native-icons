import { Platform } from 'react-native';
import IosPhonePortrait from '../ios/PhonePortrait';
import MdPhonePortrait from '../md/PhonePortrait';

export default Platform.OS === 'ios' ? IosPhonePortrait : MdPhonePortrait;