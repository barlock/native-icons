import { Platform } from 'react-native';
import IosReturnLeft from '../ios/ReturnLeft';
import MdReturnLeft from '../md/ReturnLeft';

export default Platform.OS === 'ios' ? IosReturnLeft : MdReturnLeft;