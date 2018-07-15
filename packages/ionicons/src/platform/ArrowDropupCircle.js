import { Platform } from 'react-native';
import IosArrowDropupCircle from '../ios/ArrowDropupCircle';
import MdArrowDropupCircle from '../md/ArrowDropupCircle';

export default Platform.OS === 'ios' ? IosArrowDropupCircle : MdArrowDropupCircle;