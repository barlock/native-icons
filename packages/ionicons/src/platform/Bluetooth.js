import { Platform } from 'react-native';
import IosBluetooth from '../ios/Bluetooth';
import MdBluetooth from '../md/Bluetooth';

export default Platform.OS === 'ios' ? IosBluetooth : MdBluetooth;