import { Platform } from 'react-native';
import IosCrop from '../ios/Crop';
import MdCrop from '../md/Crop';

export default Platform.OS === 'ios' ? IosCrop : MdCrop;