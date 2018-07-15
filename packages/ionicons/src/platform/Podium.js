import { Platform } from 'react-native';
import IosPodium from '../ios/Podium';
import MdPodium from '../md/Podium';

export default Platform.OS === 'ios' ? IosPodium : MdPodium;