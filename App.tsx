import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// import Index from './src_StackNavigation/Index';
// import RouteParams from './src_StackNavigation/RouteParams';
// import TabNavigation from './src_TabNavigation/Index';
// import EachTab from './src_TabNavigation/EachTab';
import DrawerNavigation from './src_DrawerNavigation/Index';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      {/* <Index /> */}
      {/* <RouteParams /> */}
      {/* <TabNavigation /> */}
      {/* <EachTab /> */}
      <DrawerNavigation />
    </NavigationContainer>
  );
}

export default App;
