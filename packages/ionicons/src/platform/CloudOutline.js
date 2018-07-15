import { Platform } from 'react-native';
import IosCloudOutline from '../ios/CloudOutline';
import MdCloudOutline from '../md/CloudOutline';

export default Platform.OS === 'ios' ? IosCloudOutline : MdCloudOutline;