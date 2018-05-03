import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter , Route ,Switch} from 'react-router-dom';
import App from './components/app';
import reducers from './reducers';
import GetUser from './components/get_user';
import Quize from './components/quize_component';
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>
    <Switch>
      <Route  path="/quize" component={Quize}/>
      <Route  path="/" component={GetUser}/>

    </Switch>
    </div>
  </BrowserRouter>

  </Provider>
  , document.querySelector('.container'));
