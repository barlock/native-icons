import { Platform } from 'react-native';
import IosPhotos from '../ios/Photos';
import MdPhotos from '../md/Photos';

export default Platform.OS === 'ios' ? IosPhotos : MdPhotos;