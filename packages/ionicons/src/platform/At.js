import { Platform } from 'react-native';
import IosAt from '../ios/At';
import MdAt from '../md/At';

export default Platform.OS === 'ios' ? IosAt : MdAt;