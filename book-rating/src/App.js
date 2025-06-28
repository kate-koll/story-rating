// import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import Main from './pages/Main';
import Raiting from './pages/Rating';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/rating" component={Raiting} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
