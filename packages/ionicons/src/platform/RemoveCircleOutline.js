import { Platform } from 'react-native';
import IosRemoveCircleOutline from '../ios/RemoveCircleOutline';
import MdRemoveCircleOutline from '../md/RemoveCircleOutline';

export default Platform.OS === 'ios' ? IosRemoveCircleOutline : MdRemoveCircleOutline;