import { Platform } from 'react-native';
import IosShareAlt from '../ios/ShareAlt';
import MdShareAlt from '../md/ShareAlt';

export default Platform.OS === 'ios' ? IosShareAlt : MdShareAlt;