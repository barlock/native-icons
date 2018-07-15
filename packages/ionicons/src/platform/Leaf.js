import { Platform } from 'react-native';
import IosLeaf from '../ios/Leaf';
import MdLeaf from '../md/Leaf';

export default Platform.OS === 'ios' ? IosLeaf : MdLeaf;