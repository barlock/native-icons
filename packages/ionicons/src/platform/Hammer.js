import { Platform } from 'react-native';
import IosHammer from '../ios/Hammer';
import MdHammer from '../md/Hammer';

export default Platform.OS === 'ios' ? IosHammer : MdHammer;