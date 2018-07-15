import { Platform } from 'react-native';
import IosClipboard from '../ios/Clipboard';
import MdClipboard from '../md/Clipboard';

export default Platform.OS === 'ios' ? IosClipboard : MdClipboard;