import './App.css';
import { useEffect } from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login'
import { useStateValue } from './StateProvider';
import auth from './firebase'


function App() {

  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        // User is Logged In
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else {
        // User is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    unsubscribe()
  }, [dispatch])

  console.log("user is ",user);
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* Checkout Page */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          {/* Login Page */}
          <Route path="/login">
            <Login />
          </Route>

          {/* Home Page */}
          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
    </div>
    </Router>
  );
}

export default App;
