import { Platform } from 'react-native';
import IosPlayCircle from '../ios/PlayCircle';
import MdPlayCircle from '../md/PlayCircle';

export default Platform.OS === 'ios' ? IosPlayCircle : MdPlayCircle;