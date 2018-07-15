import { Platform } from 'react-native';
import IosCodeWorking from '../ios/CodeWorking';
import MdCodeWorking from '../md/CodeWorking';

export default Platform.OS === 'ios' ? IosCodeWorking : MdCodeWorking;