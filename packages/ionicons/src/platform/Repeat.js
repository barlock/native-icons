import { Platform } from 'react-native';
import IosRepeat from '../ios/Repeat';
import MdRepeat from '../md/Repeat';

export default Platform.OS === 'ios' ? IosRepeat : MdRepeat;