import { Platform } from 'react-native';
import IosMailUnread from '../ios/MailUnread';
import MdMailUnread from '../md/MailUnread';

export default Platform.OS === 'ios' ? IosMailUnread : MdMailUnread;