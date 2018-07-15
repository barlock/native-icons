import { Platform } from 'react-native';
import IosReverseCamera from '../ios/ReverseCamera';
import MdReverseCamera from '../md/ReverseCamera';

export default Platform.OS === 'ios' ? IosReverseCamera : MdReverseCamera;