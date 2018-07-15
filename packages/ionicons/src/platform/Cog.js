import { Platform } from 'react-native';
import IosCog from '../ios/Cog';
import MdCog from '../md/Cog';

export default Platform.OS === 'ios' ? IosCog : MdCog;