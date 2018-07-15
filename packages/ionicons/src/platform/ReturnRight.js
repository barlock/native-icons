import { Platform } from 'react-native';
import IosReturnRight from '../ios/ReturnRight';
import MdReturnRight from '../md/ReturnRight';

export default Platform.OS === 'ios' ? IosReturnRight : MdReturnRight;