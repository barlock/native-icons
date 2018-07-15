import { Platform } from 'react-native';
import IosRedo from '../ios/Redo';
import MdRedo from '../md/Redo';

export default Platform.OS === 'ios' ? IosRedo : MdRedo;