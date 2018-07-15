import { Platform } from 'react-native';
import IosCodeDownload from '../ios/CodeDownload';
import MdCodeDownload from '../md/CodeDownload';

export default Platform.OS === 'ios' ? IosCodeDownload : MdCodeDownload;