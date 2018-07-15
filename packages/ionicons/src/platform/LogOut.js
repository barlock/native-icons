import { Platform } from 'react-native';
import IosLogOut from '../ios/LogOut';
import MdLogOut from '../md/LogOut';

export default Platform.OS === 'ios' ? IosLogOut : MdLogOut;