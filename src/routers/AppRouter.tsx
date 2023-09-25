import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator();

const screens = {
  BottomNavigation,
};

export default function AppRouter() {
  let options = {headerShown: false};

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options}>
        {Object.entries({...screens}).map(([name, component], index) => {
          return <Stack.Screen name={name} component={component} key={index} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
