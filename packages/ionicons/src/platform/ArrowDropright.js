import { Platform } from 'react-native';
import IosArrowDropright from '../ios/ArrowDropright';
import MdArrowDropright from '../md/ArrowDropright';

export default Platform.OS === 'ios' ? IosArrowDropright : MdArrowDropright;