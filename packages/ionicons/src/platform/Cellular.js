import { Platform } from 'react-native';
import IosCellular from '../ios/Cellular';
import MdCellular from '../md/Cellular';

export default Platform.OS === 'ios' ? IosCellular : MdCellular;