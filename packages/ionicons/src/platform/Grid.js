import { Platform } from 'react-native';
import IosGrid from '../ios/Grid';
import MdGrid from '../md/Grid';

export default Platform.OS === 'ios' ? IosGrid : MdGrid;