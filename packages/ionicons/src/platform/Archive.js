import { Platform } from 'react-native';
import IosArchive from '../ios/Archive';
import MdArchive from '../md/Archive';

export default Platform.OS === 'ios' ? IosArchive : MdArchive;