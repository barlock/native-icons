import { Platform } from 'react-native';
import IosLink from '../ios/Link';
import MdLink from '../md/Link';

export default Platform.OS === 'ios' ? IosLink : MdLink;