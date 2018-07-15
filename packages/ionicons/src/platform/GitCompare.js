import { Platform } from 'react-native';
import IosGitCompare from '../ios/GitCompare';
import MdGitCompare from '../md/GitCompare';

export default Platform.OS === 'ios' ? IosGitCompare : MdGitCompare;