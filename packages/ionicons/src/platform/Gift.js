import { Platform } from 'react-native';
import IosGift from '../ios/Gift';
import MdGift from '../md/Gift';

export default Platform.OS === 'ios' ? IosGift : MdGift;