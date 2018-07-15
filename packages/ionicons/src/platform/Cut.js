import { Platform } from 'react-native';
import IosCut from '../ios/Cut';
import MdCut from '../md/Cut';

export default Platform.OS === 'ios' ? IosCut : MdCut;