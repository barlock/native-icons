import { Platform } from 'react-native';
import IosCheckmarkCircle from '../ios/CheckmarkCircle';
import MdCheckmarkCircle from '../md/CheckmarkCircle';

export default Platform.OS === 'ios' ? IosCheckmarkCircle : MdCheckmarkCircle;