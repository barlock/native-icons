import { Platform } from 'react-native';
import IosThermometer from '../ios/Thermometer';
import MdThermometer from '../md/Thermometer';

export default Platform.OS === 'ios' ? IosThermometer : MdThermometer;