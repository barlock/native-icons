import { Platform } from 'react-native';
import IosUnlock from '../ios/Unlock';
import MdUnlock from '../md/Unlock';

export default Platform.OS === 'ios' ? IosUnlock : MdUnlock;