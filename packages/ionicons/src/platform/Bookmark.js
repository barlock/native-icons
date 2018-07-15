import { Platform } from 'react-native';
import IosBookmark from '../ios/Bookmark';
import MdBookmark from '../md/Bookmark';

export default Platform.OS === 'ios' ? IosBookmark : MdBookmark;