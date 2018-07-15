import { Platform } from 'react-native';
import IosColorFilter from '../ios/ColorFilter';
import MdColorFilter from '../md/ColorFilter';

export default Platform.OS === 'ios' ? IosColorFilter : MdColorFilter;