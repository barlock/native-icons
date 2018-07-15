import { Platform } from 'react-native';
import IosIceCream from '../ios/IceCream';
import MdIceCream from '../md/IceCream';

export default Platform.OS === 'ios' ? IosIceCream : MdIceCream;