import { Platform } from 'react-native';
import IosMap from '../ios/Map';
import MdMap from '../md/Map';

export default Platform.OS === 'ios' ? IosMap : MdMap;