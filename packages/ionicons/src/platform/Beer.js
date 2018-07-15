import { Platform } from 'react-native';
import IosBeer from '../ios/Beer';
import MdBeer from '../md/Beer';

export default Platform.OS === 'ios' ? IosBeer : MdBeer;