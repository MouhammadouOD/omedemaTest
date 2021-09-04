import './App.css';
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Teams from './Components/Teams'
import Error from './Components/Error'
import Users from './Components/Users';
import {useEffect} from 'react'

function App() {
useEffect(() => {
  fetch(
    "https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/"
  ).then((response) => console.log(response.json()))
}, [])

  return (
    <BrowserRouter>
      <Nav />

      <Switch>
        <Route exact path='/home' component={Home} />
        <Route path="/teams" component={Teams} />
        <Route exact path='/users' component={Users} />
        <Route component={Error} />
      </Switch>

    </BrowserRouter>
  );
}

export default App; 
