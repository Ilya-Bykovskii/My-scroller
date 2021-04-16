import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// pages
import Home from './Pages/Home';
import Favorite from './Pages/favorite';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/favorite" exact component={Favorite}/>
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
