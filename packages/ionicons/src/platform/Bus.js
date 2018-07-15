import { Platform } from 'react-native';
import IosBus from '../ios/Bus';
import MdBus from '../md/Bus';

export default Platform.OS === 'ios' ? IosBus : MdBus;