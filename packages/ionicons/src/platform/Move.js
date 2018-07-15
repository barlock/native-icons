import { Platform } from 'react-native';
import IosMove from '../ios/Move';
import MdMove from '../md/Move';

export default Platform.OS === 'ios' ? IosMove : MdMove;