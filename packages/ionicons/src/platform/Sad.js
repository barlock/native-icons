import { Platform } from 'react-native';
import IosSad from '../ios/Sad';
import MdSad from '../md/Sad';

export default Platform.OS === 'ios' ? IosSad : MdSad;