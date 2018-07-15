import { Platform } from 'react-native';
import IosCart from '../ios/Cart';
import MdCart from '../md/Cart';

export default Platform.OS === 'ios' ? IosCart : MdCart;