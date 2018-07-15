import { Platform } from 'react-native';
import IosReorder from '../ios/Reorder';
import MdReorder from '../md/Reorder';

export default Platform.OS === 'ios' ? IosReorder : MdReorder;