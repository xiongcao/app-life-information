import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import User from '../screens/User';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="User">
      <Stack.Screen
        name="User"
        component={User}
        options={{
          title: '用户',
          headerStyle: {
            backgroundColor: 'tomato',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
