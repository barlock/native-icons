import { Platform } from 'react-native';
import IosBarcode from '../ios/Barcode';
import MdBarcode from '../md/Barcode';

export default Platform.OS === 'ios' ? IosBarcode : MdBarcode;