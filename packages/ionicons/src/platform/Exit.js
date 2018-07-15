import { Platform } from 'react-native';
import IosExit from '../ios/Exit';
import MdExit from '../md/Exit';

export default Platform.OS === 'ios' ? IosExit : MdExit;