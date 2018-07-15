import { Platform } from 'react-native';
import IosBoat from '../ios/Boat';
import MdBoat from '../md/Boat';

export default Platform.OS === 'ios' ? IosBoat : MdBoat;