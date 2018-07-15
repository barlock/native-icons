import { Platform } from 'react-native';
import IosTrendingDown from '../ios/TrendingDown';
import MdTrendingDown from '../md/TrendingDown';

export default Platform.OS === 'ios' ? IosTrendingDown : MdTrendingDown;