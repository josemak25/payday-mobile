import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from './screens';

const RootStack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="SigninScreen"
          component={Screens.SigninScreen}
        />
        <RootStack.Screen
          name="SignupScreen"
          component={Screens.SignupScreen}
        />
        <RootStack.Screen name="HomeScreen" component={Screens.HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
