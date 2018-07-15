import { Platform } from 'react-native';
import IosArrowBack from '../ios/ArrowBack';
import MdArrowBack from '../md/ArrowBack';

export default Platform.OS === 'ios' ? IosArrowBack : MdArrowBack;