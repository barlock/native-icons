import { Platform } from 'react-native';
import IosNotificationsOutline from '../ios/NotificationsOutline';
import MdNotificationsOutline from '../md/NotificationsOutline';

export default Platform.OS === 'ios' ? IosNotificationsOutline : MdNotificationsOutline;