import { Platform } from 'react-native';
import IosCloudDone from '../ios/CloudDone';
import MdCloudDone from '../md/CloudDone';

export default Platform.OS === 'ios' ? IosCloudDone : MdCloudDone;