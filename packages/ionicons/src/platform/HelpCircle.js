import { Platform } from 'react-native';
import IosHelpCircle from '../ios/HelpCircle';
import MdHelpCircle from '../md/HelpCircle';

export default Platform.OS === 'ios' ? IosHelpCircle : MdHelpCircle;