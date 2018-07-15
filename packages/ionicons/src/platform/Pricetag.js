import { Platform } from 'react-native';
import IosPricetag from '../ios/Pricetag';
import MdPricetag from '../md/Pricetag';

export default Platform.OS === 'ios' ? IosPricetag : MdPricetag;