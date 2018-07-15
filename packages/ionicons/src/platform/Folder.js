import { Platform } from 'react-native';
import IosFolder from '../ios/Folder';
import MdFolder from '../md/Folder';

export default Platform.OS === 'ios' ? IosFolder : MdFolder;