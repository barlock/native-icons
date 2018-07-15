import { Platform } from 'react-native';
import IosChatbubbles from '../ios/Chatbubbles';
import MdChatbubbles from '../md/Chatbubbles';

export default Platform.OS === 'ios' ? IosChatbubbles : MdChatbubbles;