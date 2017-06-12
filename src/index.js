//React
import React from 'react';
import {render} from 'react-dom';
//Router
import {BrowserRouter ,Match ,Miss} from 'react-router';

//CSS
import './index.css';

//Components
import App from './components/App';
import Connexion from './components/Connexion';
import NotFound from './components/NotFound';


const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Connexion}/>
        <Match pattern="/pseudo/:pseudo" component={App}/>
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  );
};

render(
  <Root />, document.getElementById('root')
);
