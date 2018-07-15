import { Platform } from 'react-native';
import IosGitBranch from '../ios/GitBranch';
import MdGitBranch from '../md/GitBranch';

export default Platform.OS === 'ios' ? IosGitBranch : MdGitBranch;