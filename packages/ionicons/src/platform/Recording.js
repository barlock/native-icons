import { Platform } from 'react-native';
import IosRecording from '../ios/Recording';
import MdRecording from '../md/Recording';

export default Platform.OS === 'ios' ? IosRecording : MdRecording;