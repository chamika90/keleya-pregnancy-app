import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import StartScreen from '../screens/auth/Start';
import SignInScreen from '../screens/auth/SignIn';
import SignUpScreen from '../screens/auth/SignUp';
import SuccessScreen from '../screens/auth/Success';
import NameScreen from '../screens/auth/YourName';
import DueDateScreen from '../screens/auth/DueDate';
import WorkoutScreen from '../screens/auth/Workout';

const AuthStack = createStackNavigator();

// Auth stack
const AuthStackScreen = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <AuthStack.Screen
      name="Start"
      component={StartScreen}
      options={{title: 'Start'}}
    />
    <AuthStack.Screen
      name="SignIn"
      component={SignInScreen}
      options={{title: 'Sign In'}}
    />
    <AuthStack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={{title: 'Sign Up'}}
    />
    <AuthStack.Screen
      name="Success"
      component={SuccessScreen}
      options={{title: 'Success'}}
    />
    <AuthStack.Screen
      name="Name"
      component={NameScreen}
      options={{title: 'Name'}}
    />
    <AuthStack.Screen
      name="DueDate"
      component={DueDateScreen}
      options={{title: 'Due Date'}}
    />
    <AuthStack.Screen
      name="Workout"
      component={WorkoutScreen}
      options={{title: 'Workout'}}
    />
  </AuthStack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStackScreen />
    </NavigationContainer>
  );
};

export default AppNavigator;
