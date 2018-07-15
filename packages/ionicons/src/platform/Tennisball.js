import { Platform } from 'react-native';
import IosTennisball from '../ios/Tennisball';
import MdTennisball from '../md/Tennisball';

export default Platform.OS === 'ios' ? IosTennisball : MdTennisball;