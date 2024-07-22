import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import News from '../screens/News';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="News">
      <Stack.Screen
        name="News"
        component={News}
        options={{
          title: '新闻',
          headerStyle: {
            backgroundColor: 'tomato',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
