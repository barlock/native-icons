import { Platform } from 'react-native';
import IosBriefcase from '../ios/Briefcase';
import MdBriefcase from '../md/Briefcase';

export default Platform.OS === 'ios' ? IosBriefcase : MdBriefcase;