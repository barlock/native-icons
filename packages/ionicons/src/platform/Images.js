import { Platform } from 'react-native';
import IosImages from '../ios/Images';
import MdImages from '../md/Images';

export default Platform.OS === 'ios' ? IosImages : MdImages;