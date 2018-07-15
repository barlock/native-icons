import { Platform } from 'react-native';
import IosDisc from '../ios/Disc';
import MdDisc from '../md/Disc';

export default Platform.OS === 'ios' ? IosDisc : MdDisc;