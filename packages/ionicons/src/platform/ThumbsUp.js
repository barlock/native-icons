import { Platform } from 'react-native';
import IosThumbsUp from '../ios/ThumbsUp';
import MdThumbsUp from '../md/ThumbsUp';

export default Platform.OS === 'ios' ? IosThumbsUp : MdThumbsUp;