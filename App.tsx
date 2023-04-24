import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import ChapterList from './ChapterList';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ChapterList />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;