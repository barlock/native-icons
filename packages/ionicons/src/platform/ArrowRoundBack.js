import { Platform } from 'react-native';
import IosArrowRoundBack from '../ios/ArrowRoundBack';
import MdArrowRoundBack from '../md/ArrowRoundBack';

export default Platform.OS === 'ios' ? IosArrowRoundBack : MdArrowRoundBack;