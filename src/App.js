import './App.css';
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Teams from './Components/Teams'
import Error from './Components/Error'
import Users from './Components/Users';
//import {useSelector , useDispatch} from 'react-redux';
//import {useEffect , useState } from 'react';
import {Provider} from 'react-redux';
import store from './redux/store'

function App() {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />

        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/' component={Home} />
          <Route path="/teams" component={Teams} />
          <Route exact path='/users' component={Users} />
          <Route component={Error} />
        </Switch>

    </BrowserRouter>
    </Provider>
   
  );
}

export default App; 
