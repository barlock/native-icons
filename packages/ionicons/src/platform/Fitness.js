import { Platform } from 'react-native';
import IosFitness from '../ios/Fitness';
import MdFitness from '../md/Fitness';

export default Platform.OS === 'ios' ? IosFitness : MdFitness;