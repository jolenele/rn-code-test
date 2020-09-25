import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import Product from './src/components/Product';

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" />
    <Product />
    <Home />
  </NavigationContainer>
);

export default App;
