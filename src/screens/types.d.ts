import { StackNavigationProp, RouteProp } from '@react-navigation/stack';
import { StackActionHelpers } from '@react-navigation/native';

// App Navigation prop types
export type RootStackParamList = {
  SignupScreen: undefined;
  SigninScreen: undefined;
  HomeScreen: undefined;
};

export type RootStackParamScreensList =
  | 'SignupScreen'
  | 'SigninScreen'
  | 'HomeScreen';

interface StackScreenInterface {
  navigation: StackNavigationProp<RootStackParamList, string>;
  route: RouteProp<RootStackParamList, string>;
}

export interface NavigationInterface extends StackScreenInterface {
  testID?: string;
}
