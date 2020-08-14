
import React from 'react';
//import Routes from './Routes';
import { GalioProvider } from 'galio-framework';
import { Provider } from 'react-redux';
import store from './store';
import { StatusBar } from 'react-native';
import Nav from './Routes/navigator';

const customTheme = {
  SIZES: { BASE: 18, },
  // this will overwrite the Galio SIZES BASE value 16
  COLORS: {
  //    PRIMARY: '#00adb5',
        // INPUT:'#393E46',
  //    NAVBAR:'#eeeeee',
  //    BLOCK:'red',
     TEXT:'#EEE'
    },

  // this will overwrite the Galio COLORS PRIMARY color #B23AFC
};

const App = () => {
  return (<Provider store={store}>
      <StatusBar backgroundColor={"#222831"} barStyle={'light-content'} /> 
      <GalioProvider theme={customTheme}>
        <Nav />
      </GalioProvider>
    </Provider>
  );
};

export default App;
