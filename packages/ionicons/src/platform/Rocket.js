import { Platform } from 'react-native';
import IosRocket from '../ios/Rocket';
import MdRocket from '../md/Rocket';

export default Platform.OS === 'ios' ? IosRocket : MdRocket;