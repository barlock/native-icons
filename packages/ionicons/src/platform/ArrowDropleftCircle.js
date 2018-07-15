import { Platform } from 'react-native';
import IosArrowDropleftCircle from '../ios/ArrowDropleftCircle';
import MdArrowDropleftCircle from '../md/ArrowDropleftCircle';

export default Platform.OS === 'ios' ? IosArrowDropleftCircle : MdArrowDropleftCircle;