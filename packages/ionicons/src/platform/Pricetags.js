import { Platform } from 'react-native';
import IosPricetags from '../ios/Pricetags';
import MdPricetags from '../md/Pricetags';

export default Platform.OS === 'ios' ? IosPricetags : MdPricetags;