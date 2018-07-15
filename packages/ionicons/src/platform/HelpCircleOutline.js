import { Platform } from 'react-native';
import IosHelpCircleOutline from '../ios/HelpCircleOutline';
import MdHelpCircleOutline from '../md/HelpCircleOutline';

export default Platform.OS === 'ios' ? IosHelpCircleOutline : MdHelpCircleOutline;