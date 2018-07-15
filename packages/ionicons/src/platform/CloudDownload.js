import { Platform } from 'react-native';
import IosCloudDownload from '../ios/CloudDownload';
import MdCloudDownload from '../md/CloudDownload';

export default Platform.OS === 'ios' ? IosCloudDownload : MdCloudDownload;