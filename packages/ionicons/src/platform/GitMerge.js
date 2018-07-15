import { Platform } from 'react-native';
import IosGitMerge from '../ios/GitMerge';
import MdGitMerge from '../md/GitMerge';

export default Platform.OS === 'ios' ? IosGitMerge : MdGitMerge;