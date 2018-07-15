import { Platform } from 'react-native';
import IosArrowDroprightCircle from '../ios/ArrowDroprightCircle';
import MdArrowDroprightCircle from '../md/ArrowDroprightCircle';

export default Platform.OS === 'ios' ? IosArrowDroprightCircle : MdArrowDroprightCircle;