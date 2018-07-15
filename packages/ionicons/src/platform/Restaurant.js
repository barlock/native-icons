import { Platform } from 'react-native';
import IosRestaurant from '../ios/Restaurant';
import MdRestaurant from '../md/Restaurant';

export default Platform.OS === 'ios' ? IosRestaurant : MdRestaurant;