import { Platform } from 'react-native';
import IosArrowDown from '../ios/ArrowDown';
import MdArrowDown from '../md/ArrowDown';

export default Platform.OS === 'ios' ? IosArrowDown : MdArrowDown;