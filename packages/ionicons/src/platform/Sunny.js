import { Platform } from 'react-native';
import IosSunny from '../ios/Sunny';
import MdSunny from '../md/Sunny';

export default Platform.OS === 'ios' ? IosSunny : MdSunny;