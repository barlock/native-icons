import { Platform } from 'react-native';
import IosRemoveCircle from '../ios/RemoveCircle';
import MdRemoveCircle from '../md/RemoveCircle';

export default Platform.OS === 'ios' ? IosRemoveCircle : MdRemoveCircle;