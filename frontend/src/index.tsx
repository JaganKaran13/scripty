import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CardList from '../src/components/card-list/card-list.component';
import DetailView from '../src/components/detail-view/detail-view.component';
import App from './components/app/App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import NavBar from '../src/components/nav-bar/nav-bar.component';

const routing = (
    <Router>
      <div>
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={App} />

        <Route path="/apt-detail/:id" component={DetailView} />
        <Route path="/apt-list" component={CardList} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
