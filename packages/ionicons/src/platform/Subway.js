import { Platform } from 'react-native';
import IosSubway from '../ios/Subway';
import MdSubway from '../md/Subway';

export default Platform.OS === 'ios' ? IosSubway : MdSubway;