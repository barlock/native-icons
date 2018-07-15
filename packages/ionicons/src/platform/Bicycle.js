import { Platform } from 'react-native';
import IosBicycle from '../ios/Bicycle';
import MdBicycle from '../md/Bicycle';

export default Platform.OS === 'ios' ? IosBicycle : MdBicycle;