import { Platform } from 'react-native';
import IosAddCircleOutline from '../ios/AddCircleOutline';
import MdAddCircleOutline from '../md/AddCircleOutline';

export default Platform.OS === 'ios' ? IosAddCircleOutline : MdAddCircleOutline;