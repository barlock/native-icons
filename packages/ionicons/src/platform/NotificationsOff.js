import { Platform } from 'react-native';
import IosNotificationsOff from '../ios/NotificationsOff';
import MdNotificationsOff from '../md/NotificationsOff';

export default Platform.OS === 'ios' ? IosNotificationsOff : MdNotificationsOff;