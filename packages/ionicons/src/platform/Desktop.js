import { Platform } from 'react-native';
import IosDesktop from '../ios/Desktop';
import MdDesktop from '../md/Desktop';

export default Platform.OS === 'ios' ? IosDesktop : MdDesktop;