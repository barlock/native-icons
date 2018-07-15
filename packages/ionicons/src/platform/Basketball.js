import { Platform } from 'react-native';
import IosBasketball from '../ios/Basketball';
import MdBasketball from '../md/Basketball';

export default Platform.OS === 'ios' ? IosBasketball : MdBasketball;