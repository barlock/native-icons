import { Platform } from 'react-native';
import IosDownload from '../ios/Download';
import MdDownload from '../md/Download';

export default Platform.OS === 'ios' ? IosDownload : MdDownload;