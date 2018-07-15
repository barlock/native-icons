import { Platform } from 'react-native';
import IosCloudy from '../ios/Cloudy';
import MdCloudy from '../md/Cloudy';

export default Platform.OS === 'ios' ? IosCloudy : MdCloudy;