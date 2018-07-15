import { Platform } from 'react-native';
import IosGitNetwork from '../ios/GitNetwork';
import MdGitNetwork from '../md/GitNetwork';

export default Platform.OS === 'ios' ? IosGitNetwork : MdGitNetwork;