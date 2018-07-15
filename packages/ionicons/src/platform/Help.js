import { Platform } from 'react-native';
import IosHelp from '../ios/Help';
import MdHelp from '../md/Help';

export default Platform.OS === 'ios' ? IosHelp : MdHelp;