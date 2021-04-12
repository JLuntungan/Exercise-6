/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Registration from './components/pages/registration'
import UserLists from './components/pages/userLists'

const App = () => {
  
  const [page, setPage] = useState('Registration')

  if(page == 'Registration'){
    return  (
      <View>
        <Registration changePageHandler={()=> setPage('UserList')}></Registration>
      </View>
    )
  }else if(page == 'UserList'){
    return (
      <View>
        <UserLists></UserLists>
      </View>
    )
  }
};

export default App;
