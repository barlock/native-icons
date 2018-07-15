import { Platform } from 'react-native';
import IosWalk from '../ios/Walk';
import MdWalk from '../md/Walk';

export default Platform.OS === 'ios' ? IosWalk : MdWalk;