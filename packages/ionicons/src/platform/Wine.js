import { Platform } from 'react-native';
import IosWine from '../ios/Wine';
import MdWine from '../md/Wine';

export default Platform.OS === 'ios' ? IosWine : MdWine;