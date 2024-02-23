import React from 'react';
import {Provider} from 'react-redux';
import Main from './src/main';
import { store } from './src/context/store';

const App = () => {
  return (
<Provider store={store}>
<Main />
</Provider>
  );
};
 
export default App;