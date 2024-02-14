/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { todoStore } from './src/app/store';
import AddTodo from './src/app/Component/addTodo';








function App(): React.JSX.Element {
 

  

  return (
 <Provider store={todoStore}>
<AddTodo/>
 </Provider>
  );
}


export default App;
