import { Platform } from 'react-native';
import IosChatboxes from '../ios/Chatboxes';
import MdChatboxes from '../md/Chatboxes';

export default Platform.OS === 'ios' ? IosChatboxes : MdChatboxes;