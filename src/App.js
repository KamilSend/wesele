import React from "react";
import { Switch, Route } from "react-router-dom";


import Menu from './components/menu/menu'
import About from './components/about/about'
import Ceremony from './components/ceremony/ceremony'
import Gallery from './components/gallery/gallery'
import Songbook from './components/songbook/songbook'
import Background from './components/background/background'

import './App.css';

function App() {
  return (
    <div className="App">
      <Menu/>
        <Background/>

        <Switch>
            <Route path="/informacje">
                <About />
            </Route>
            <Route path="/ceremonia">
                <Ceremony/>
            </Route>
            <Route path="/galeria">
                <Gallery />
            </Route>
            <Route path="/śpiewnik">
                <Songbook />
            </Route>
        </Switch>


      {/*<About/>*/}
      {/*<Ceremony/>*/}
      {/*<Gallery/>*/}
      {/*<Songbook/>*/}
    </div>
  );
}

export default App;
