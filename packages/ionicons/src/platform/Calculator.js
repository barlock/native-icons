import { Platform } from 'react-native';
import IosCalculator from '../ios/Calculator';
import MdCalculator from '../md/Calculator';

export default Platform.OS === 'ios' ? IosCalculator : MdCalculator;