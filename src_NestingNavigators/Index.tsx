import React from 'react';
import {View, Text, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{marginBottom: 100}}>Home Screen</Text>
      <Button
        title="Go to Details11"
        onPress={() => {
          navigation.navigate('Details');
        }}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Index(): React.JSX.Element {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{
          title: '首页',
          headerStyle: {
            backgroundColor: 'tomato',
          },
        }}>
        {props => <HomeScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Details">
        {props => <DetailsScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default Index;
