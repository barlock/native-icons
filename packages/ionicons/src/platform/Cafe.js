import { Platform } from 'react-native';
import IosCafe from '../ios/Cafe';
import MdCafe from '../md/Cafe';

export default Platform.OS === 'ios' ? IosCafe : MdCafe;