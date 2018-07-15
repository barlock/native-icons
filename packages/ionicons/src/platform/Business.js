import { Platform } from 'react-native';
import IosBusiness from '../ios/Business';
import MdBusiness from '../md/Business';

export default Platform.OS === 'ios' ? IosBusiness : MdBusiness;