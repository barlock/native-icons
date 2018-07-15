import { Platform } from 'react-native';
import IosStar from '../ios/Star';
import MdStar from '../md/Star';

export default Platform.OS === 'ios' ? IosStar : MdStar;