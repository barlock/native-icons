import { Platform } from 'react-native';
import IosArrowRoundUp from '../ios/ArrowRoundUp';
import MdArrowRoundUp from '../md/ArrowRoundUp';

export default Platform.OS === 'ios' ? IosArrowRoundUp : MdArrowRoundUp;