import { Platform } from 'react-native';
import IosTrendingUp from '../ios/TrendingUp';
import MdTrendingUp from '../md/TrendingUp';

export default Platform.OS === 'ios' ? IosTrendingUp : MdTrendingUp;