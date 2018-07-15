import { Platform } from 'react-native';
import IosQrScanner from '../ios/QrScanner';
import MdQrScanner from '../md/QrScanner';

export default Platform.OS === 'ios' ? IosQrScanner : MdQrScanner;