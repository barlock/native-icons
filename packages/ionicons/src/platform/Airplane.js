import { Platform } from 'react-native';
import IosAirplane from '../ios/Airplane';
import MdAirplane from '../md/Airplane';

export default Platform.OS === 'ios' ? IosAirplane : MdAirplane;