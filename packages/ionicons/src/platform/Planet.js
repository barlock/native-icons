import { Platform } from 'react-native';
import IosPlanet from '../ios/Planet';
import MdPlanet from '../md/Planet';

export default Platform.OS === 'ios' ? IosPlanet : MdPlanet;