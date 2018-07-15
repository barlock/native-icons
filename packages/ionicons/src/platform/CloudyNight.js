import { Platform } from 'react-native';
import IosCloudyNight from '../ios/CloudyNight';
import MdCloudyNight from '../md/CloudyNight';

export default Platform.OS === 'ios' ? IosCloudyNight : MdCloudyNight;