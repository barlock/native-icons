import { Platform } from 'react-native';
import IosMoon from '../ios/Moon';
import MdMoon from '../md/Moon';

export default Platform.OS === 'ios' ? IosMoon : MdMoon;