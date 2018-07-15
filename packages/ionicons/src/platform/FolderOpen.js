import { Platform } from 'react-native';
import IosFolderOpen from '../ios/FolderOpen';
import MdFolderOpen from '../md/FolderOpen';

export default Platform.OS === 'ios' ? IosFolderOpen : MdFolderOpen;