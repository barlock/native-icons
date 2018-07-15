import { Platform } from 'react-native';
import IosContrast from '../ios/Contrast';
import MdContrast from '../md/Contrast';

export default Platform.OS === 'ios' ? IosContrast : MdContrast;