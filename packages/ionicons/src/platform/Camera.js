import { Platform } from 'react-native';
import IosCamera from '../ios/Camera';
import MdCamera from '../md/Camera';

export default Platform.OS === 'ios' ? IosCamera : MdCamera;