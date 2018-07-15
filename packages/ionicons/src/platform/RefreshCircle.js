import { Platform } from 'react-native';
import IosRefreshCircle from '../ios/RefreshCircle';
import MdRefreshCircle from '../md/RefreshCircle';

export default Platform.OS === 'ios' ? IosRefreshCircle : MdRefreshCircle;