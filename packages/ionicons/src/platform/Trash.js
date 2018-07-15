import { Platform } from 'react-native';
import IosTrash from '../ios/Trash';
import MdTrash from '../md/Trash';

export default Platform.OS === 'ios' ? IosTrash : MdTrash;