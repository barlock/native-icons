import { Platform } from 'react-native';
import IosThumbsDown from '../ios/ThumbsDown';
import MdThumbsDown from '../md/ThumbsDown';

export default Platform.OS === 'ios' ? IosThumbsDown : MdThumbsDown;