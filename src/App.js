
import React from 'react';
import Routes from './Routes';
import { GalioProvider } from 'galio-framework';
import { Provider } from 'react-redux';
import store from './store';
import { StatusBar } from 'react-native';

const customTheme = {
  SIZES: { BASE: 18, },
  // this will overwrite the Galio SIZES BASE value 16
  // COLORS: {
  //    PRIMARY: '#3B5998',
  //    INPUT:'#1232FF',
  //    NAVBAR:'#FFF',
  //    BLOCK:'red'
  //   },

  // this will overwrite the Galio COLORS PRIMARY color #B23AFC
};

const App = () => {
  return (<Provider store={store}>
      <StatusBar backgroundColor={"#dbdbdb90"} barStyle={'dark-content'} /> 
      <GalioProvider theme={customTheme}>
        <Routes />
      </GalioProvider>
    </Provider>
  );
};

export default App;
