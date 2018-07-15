import { Platform } from 'react-native';
import IosMenu from '../ios/Menu';
import MdMenu from '../md/Menu';

export default Platform.OS === 'ios' ? IosMenu : MdMenu;