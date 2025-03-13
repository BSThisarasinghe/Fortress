import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './RootStack';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
