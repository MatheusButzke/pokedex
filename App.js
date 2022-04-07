import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/pages/Home/index';
import Infos from './src/pages/Infos/index';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} options={{
              headerShown: false
            }}
          />
          <Stack.Screen name='Infos' component={Infos} options={{
              headerShown: false
            }}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}