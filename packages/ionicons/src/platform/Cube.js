import { Platform } from 'react-native';
import IosCube from '../ios/Cube';
import MdCube from '../md/Cube';

export default Platform.OS === 'ios' ? IosCube : MdCube;