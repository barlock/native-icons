import { Platform } from 'react-native';
import IosArrowRoundForward from '../ios/ArrowRoundForward';
import MdArrowRoundForward from '../md/ArrowRoundForward';

export default Platform.OS === 'ios' ? IosArrowRoundForward : MdArrowRoundForward;