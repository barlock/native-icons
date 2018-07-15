import { Platform } from 'react-native';
import IosGlasses from '../ios/Glasses';
import MdGlasses from '../md/Glasses';

export default Platform.OS === 'ios' ? IosGlasses : MdGlasses;