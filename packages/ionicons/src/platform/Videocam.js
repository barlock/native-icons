import { Platform } from 'react-native';
import IosVideocam from '../ios/Videocam';
import MdVideocam from '../md/Videocam';

export default Platform.OS === 'ios' ? IosVideocam : MdVideocam;