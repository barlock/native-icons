import { Platform } from 'react-native';
import IosOptions from '../ios/Options';
import MdOptions from '../md/Options';

export default Platform.OS === 'ios' ? IosOptions : MdOptions;