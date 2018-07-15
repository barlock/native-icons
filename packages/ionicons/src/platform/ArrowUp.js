import { Platform } from 'react-native';
import IosArrowUp from '../ios/ArrowUp';
import MdArrowUp from '../md/ArrowUp';

export default Platform.OS === 'ios' ? IosArrowUp : MdArrowUp;