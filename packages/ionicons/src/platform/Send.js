import { Platform } from 'react-native';
import IosSend from '../ios/Send';
import MdSend from '../md/Send';

export default Platform.OS === 'ios' ? IosSend : MdSend;