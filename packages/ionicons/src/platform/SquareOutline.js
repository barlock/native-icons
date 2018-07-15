import { Platform } from 'react-native';
import IosSquareOutline from '../ios/SquareOutline';
import MdSquareOutline from '../md/SquareOutline';

export default Platform.OS === 'ios' ? IosSquareOutline : MdSquareOutline;