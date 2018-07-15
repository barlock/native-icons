import { Platform } from 'react-native';
import IosGitPullRequest from '../ios/GitPullRequest';
import MdGitPullRequest from '../md/GitPullRequest';

export default Platform.OS === 'ios' ? IosGitPullRequest : MdGitPullRequest;