import { Platform } from 'react-native';
import IosSpeedometer from '../ios/Speedometer';
import MdSpeedometer from '../md/Speedometer';

export default Platform.OS === 'ios' ? IosSpeedometer : MdSpeedometer;