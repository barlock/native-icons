import { Platform } from 'react-native';
import IosArrowDropdownCircle from '../ios/ArrowDropdownCircle';
import MdArrowDropdownCircle from '../md/ArrowDropdownCircle';

export default Platform.OS === 'ios' ? IosArrowDropdownCircle : MdArrowDropdownCircle;