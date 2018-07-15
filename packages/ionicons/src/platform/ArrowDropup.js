import { Platform } from 'react-native';
import IosArrowDropup from '../ios/ArrowDropup';
import MdArrowDropup from '../md/ArrowDropup';

export default Platform.OS === 'ios' ? IosArrowDropup : MdArrowDropup;