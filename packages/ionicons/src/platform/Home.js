import { Platform } from 'react-native';
import IosHome from '../ios/Home';
import MdHome from '../md/Home';

export default Platform.OS === 'ios' ? IosHome : MdHome;