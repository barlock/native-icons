import { Platform } from 'react-native';
import IosSquare from '../ios/Square';
import MdSquare from '../md/Square';

export default Platform.OS === 'ios' ? IosSquare : MdSquare;