import { Platform } from 'react-native';
import IosTabletPortrait from '../ios/TabletPortrait';
import MdTabletPortrait from '../md/TabletPortrait';

export default Platform.OS === 'ios' ? IosTabletPortrait : MdTabletPortrait;