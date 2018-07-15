import { Platform } from 'react-native';
import IosArrowRoundDown from '../ios/ArrowRoundDown';
import MdArrowRoundDown from '../md/ArrowRoundDown';

export default Platform.OS === 'ios' ? IosArrowRoundDown : MdArrowRoundDown;