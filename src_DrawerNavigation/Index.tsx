import * as React from 'react';
import {Button, View, useWindowDimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      <Button onPress={() => navigation.openDrawer()} title="Open Drawer" />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

const App = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      defaultStatus="open"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
        drawerPosition: 'right',
        overlayColor: 'transparent',
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
};

export default App;
