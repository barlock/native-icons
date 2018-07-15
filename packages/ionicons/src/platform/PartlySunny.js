import { Platform } from 'react-native';
import IosPartlySunny from '../ios/PartlySunny';
import MdPartlySunny from '../md/PartlySunny';

export default Platform.OS === 'ios' ? IosPartlySunny : MdPartlySunny;