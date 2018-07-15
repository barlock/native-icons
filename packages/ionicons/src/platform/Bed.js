import { Platform } from 'react-native';
import IosBed from '../ios/Bed';
import MdBed from '../md/Bed';

export default Platform.OS === 'ios' ? IosBed : MdBed;