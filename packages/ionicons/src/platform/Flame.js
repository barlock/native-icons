import { Platform } from 'react-native';
import IosFlame from '../ios/Flame';
import MdFlame from '../md/Flame';

export default Platform.OS === 'ios' ? IosFlame : MdFlame;