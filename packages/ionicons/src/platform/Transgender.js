import { Platform } from 'react-native';
import IosTransgender from '../ios/Transgender';
import MdTransgender from '../md/Transgender';

export default Platform.OS === 'ios' ? IosTransgender : MdTransgender;