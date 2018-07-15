import { Platform } from 'react-native';
import IosRemove from '../ios/Remove';
import MdRemove from '../md/Remove';

export default Platform.OS === 'ios' ? IosRemove : MdRemove;