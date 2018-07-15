import { Platform } from 'react-native';
import IosBonfire from '../ios/Bonfire';
import MdBonfire from '../md/Bonfire';

export default Platform.OS === 'ios' ? IosBonfire : MdBonfire;