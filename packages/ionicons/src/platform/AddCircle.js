import { Platform } from 'react-native';
import IosAddCircle from '../ios/AddCircle';
import MdAddCircle from '../md/AddCircle';

export default Platform.OS === 'ios' ? IosAddCircle : MdAddCircle;