import { Platform } from 'react-native';
import IosBulb from '../ios/Bulb';
import MdBulb from '../md/Bulb';

export default Platform.OS === 'ios' ? IosBulb : MdBulb;