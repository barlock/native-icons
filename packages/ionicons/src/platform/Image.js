import { Platform } from 'react-native';
import IosImage from '../ios/Image';
import MdImage from '../md/Image';

export default Platform.OS === 'ios' ? IosImage : MdImage;