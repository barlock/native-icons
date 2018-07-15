import { Platform } from 'react-native';
import IosLocate from '../ios/Locate';
import MdLocate from '../md/Locate';

export default Platform.OS === 'ios' ? IosLocate : MdLocate;