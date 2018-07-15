import { Platform } from 'react-native';
import IosBowtie from '../ios/Bowtie';
import MdBowtie from '../md/Bowtie';

export default Platform.OS === 'ios' ? IosBowtie : MdBowtie;