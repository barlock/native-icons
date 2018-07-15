import { Platform } from 'react-native';
import IosOutlet from '../ios/Outlet';
import MdOutlet from '../md/Outlet';

export default Platform.OS === 'ios' ? IosOutlet : MdOutlet;