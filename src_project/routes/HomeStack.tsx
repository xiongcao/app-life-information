import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: '首页',
          headerStyle: {
            backgroundColor: 'tomato',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
