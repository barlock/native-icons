import { Platform } from 'react-native';
import IosArrowDropleft from '../ios/ArrowDropleft';
import MdArrowDropleft from '../md/ArrowDropleft';

export default Platform.OS === 'ios' ? IosArrowDropleft : MdArrowDropleft;