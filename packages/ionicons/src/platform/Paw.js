import { Platform } from 'react-native';
import IosPaw from '../ios/Paw';
import MdPaw from '../md/Paw';

export default Platform.OS === 'ios' ? IosPaw : MdPaw;