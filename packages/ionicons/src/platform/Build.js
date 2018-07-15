import { Platform } from 'react-native';
import IosBuild from '../ios/Build';
import MdBuild from '../md/Build';

export default Platform.OS === 'ios' ? IosBuild : MdBuild;