import { Platform } from 'react-native';
import IosRainy from '../ios/Rainy';
import MdRainy from '../md/Rainy';

export default Platform.OS === 'ios' ? IosRainy : MdRainy;