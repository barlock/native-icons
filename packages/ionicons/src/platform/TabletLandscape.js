import { Platform } from 'react-native';
import IosTabletLandscape from '../ios/TabletLandscape';
import MdTabletLandscape from '../md/TabletLandscape';

export default Platform.OS === 'ios' ? IosTabletLandscape : MdTabletLandscape;