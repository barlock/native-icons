import { Platform } from 'react-native';
import IosCloudCircle from '../ios/CloudCircle';
import MdCloudCircle from '../md/CloudCircle';

export default Platform.OS === 'ios' ? IosCloudCircle : MdCloudCircle;