import { Platform } from 'react-native';
import IosAnalytics from '../ios/Analytics';
import MdAnalytics from '../md/Analytics';

export default Platform.OS === 'ios' ? IosAnalytics : MdAnalytics;