import { Platform } from 'react-native';
import IosArrowDropdown from '../ios/ArrowDropdown';
import MdArrowDropdown from '../md/ArrowDropdown';

export default Platform.OS === 'ios' ? IosArrowDropdown : MdArrowDropdown;