import { Platform } from 'react-native';
import IosNutrition from '../ios/Nutrition';
import MdNutrition from '../md/Nutrition';

export default Platform.OS === 'ios' ? IosNutrition : MdNutrition;