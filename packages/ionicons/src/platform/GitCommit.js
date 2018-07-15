import { Platform } from 'react-native';
import IosGitCommit from '../ios/GitCommit';
import MdGitCommit from '../md/GitCommit';

export default Platform.OS === 'ios' ? IosGitCommit : MdGitCommit;