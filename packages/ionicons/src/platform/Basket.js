import { Platform } from 'react-native';
import IosBasket from '../ios/Basket';
import MdBasket from '../md/Basket';

export default Platform.OS === 'ios' ? IosBasket : MdBasket;