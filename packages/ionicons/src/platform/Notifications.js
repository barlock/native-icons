import { Platform } from 'react-native';
import IosNotifications from '../ios/Notifications';
import MdNotifications from '../md/Notifications';

export default Platform.OS === 'ios' ? IosNotifications : MdNotifications;