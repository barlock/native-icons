import { Platform } from 'react-native';
import IosShirt from '../ios/Shirt';
import MdShirt from '../md/Shirt';

export default Platform.OS === 'ios' ? IosShirt : MdShirt;