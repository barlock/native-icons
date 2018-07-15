import { Platform } from 'react-native';
import IosCloudUpload from '../ios/CloudUpload';
import MdCloudUpload from '../md/CloudUpload';

export default Platform.OS === 'ios' ? IosCloudUpload : MdCloudUpload;