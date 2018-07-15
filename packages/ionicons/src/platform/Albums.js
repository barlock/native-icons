import { Platform } from 'react-native';
import IosAlbums from '../ios/Albums';
import MdAlbums from '../md/Albums';

export default Platform.OS === 'ios' ? IosAlbums : MdAlbums;