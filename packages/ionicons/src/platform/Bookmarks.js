import { Platform } from 'react-native';
import IosBookmarks from '../ios/Bookmarks';
import MdBookmarks from '../md/Bookmarks';

export default Platform.OS === 'ios' ? IosBookmarks : MdBookmarks;