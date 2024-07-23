/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import HomeScreen from '../screens/Home';
import TakePictureScreen from '../screens/Home/TakePicture';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '首页',
          headerStyle: {
            backgroundColor: '#00b38a',
          },
          headerShadowVisible: false,
          headerTintColor: '#ffffff',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('TakePicture')}>
              <Text style={{fontSize: 18, color: '#ffffff', marginRight: 10}}>
                拍照
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="TakePicture" component={TakePictureScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
