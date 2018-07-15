import { Platform } from 'react-native';
import IosArrowForward from '../ios/ArrowForward';
import MdArrowForward from '../md/ArrowForward';

export default Platform.OS === 'ios' ? IosArrowForward : MdArrowForward;