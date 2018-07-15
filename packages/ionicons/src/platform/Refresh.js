import { Platform } from 'react-native';
import IosRefresh from '../ios/Refresh';
import MdRefresh from '../md/Refresh';

export default Platform.OS === 'ios' ? IosRefresh : MdRefresh;