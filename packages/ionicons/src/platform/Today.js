import { Platform } from 'react-native';
import IosToday from '../ios/Today';
import MdToday from '../md/Today';

export default Platform.OS === 'ios' ? IosToday : MdToday;