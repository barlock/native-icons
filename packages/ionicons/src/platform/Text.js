import { Platform } from 'react-native';
import IosText from '../ios/Text';
import MdText from '../md/Text';

export default Platform.OS === 'ios' ? IosText : MdText;