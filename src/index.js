import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import PokemonContent from './pages/PokemonContent';
import PokemonDetails from './pages/PokemonDetails';
import rootReducers from "./store/reducers";
import './main.css'

const store = createStore(rootReducers, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path='/' component={PokemonContent} />
          <Route path='/show/:id' component={PokemonDetails} />
        </div>
      </Router>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
