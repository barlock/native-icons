import { Platform } from 'react-native';
import IosCheckmark from '../ios/Checkmark';
import MdCheckmark from '../md/Checkmark';

export default Platform.OS === 'ios' ? IosCheckmark : MdCheckmark;