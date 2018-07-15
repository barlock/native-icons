import { Platform } from 'react-native';
import IosGlobe from '../ios/Globe';
import MdGlobe from '../md/Globe';

export default Platform.OS === 'ios' ? IosGlobe : MdGlobe;