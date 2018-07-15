import { Platform } from 'react-native';
import IosMailOpen from '../ios/MailOpen';
import MdMailOpen from '../md/MailOpen';

export default Platform.OS === 'ios' ? IosMailOpen : MdMailOpen;