import { Platform } from 'react-native';
import IosAdd from '../ios/Add';
import MdAdd from '../md/Add';

export default Platform.OS === 'ios' ? IosAdd : MdAdd;