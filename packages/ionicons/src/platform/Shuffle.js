import { Platform } from 'react-native';
import IosShuffle from '../ios/Shuffle';
import MdShuffle from '../md/Shuffle';

export default Platform.OS === 'ios' ? IosShuffle : MdShuffle;