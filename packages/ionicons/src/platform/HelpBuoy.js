import { Platform } from 'react-native';
import IosHelpBuoy from '../ios/HelpBuoy';
import MdHelpBuoy from '../md/HelpBuoy';

export default Platform.OS === 'ios' ? IosHelpBuoy : MdHelpBuoy;