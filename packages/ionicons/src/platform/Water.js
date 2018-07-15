import { Platform } from 'react-native';
import IosWater from '../ios/Water';
import MdWater from '../md/Water';

export default Platform.OS === 'ios' ? IosWater : MdWater;