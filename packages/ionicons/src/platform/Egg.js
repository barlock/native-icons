import { Platform } from 'react-native';
import IosEgg from '../ios/Egg';
import MdEgg from '../md/Egg';

export default Platform.OS === 'ios' ? IosEgg : MdEgg;