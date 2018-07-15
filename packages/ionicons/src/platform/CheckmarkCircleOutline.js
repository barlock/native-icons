import { Platform } from 'react-native';
import IosCheckmarkCircleOutline from '../ios/CheckmarkCircleOutline';
import MdCheckmarkCircleOutline from '../md/CheckmarkCircleOutline';

export default Platform.OS === 'ios' ? IosCheckmarkCircleOutline : MdCheckmarkCircleOutline;