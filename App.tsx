import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// import Index from './src_StackNavigation/Index';
// import RouteParams from './src_StackNavigation/RouteParams';
// import TabNavigation from './src_TabNavigation/Index';
import EachTab from './src_TabNavigation/EachTab';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      {/* <Index /> */}
      {/* <RouteParams /> */}
      {/* <TabNavigation /> */}
      <EachTab />
    </NavigationContainer>
  );
}

export default App;
