import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import About from './pages/about'
import Contact from './pages/contact'
import Gallery from './pages/gallery'
import store from "./store";
import {useSelector} from "react-redux";

function App() {
  console.log(store.getState())
  const count = useSelector(state => state.counter.value)
  const inc = (i) => {
    store.dispatch({type: 'counter/incremented'})
    console.log(store.getState())
  }
  const dec = (i) => {
    store.dispatch({type: 'counter/decremented'})
    console.log(store.getState())
  }
  const addUser = () => {
    store.dispatch({type: 'user/add', payload: {name: 'Islom', age: 20}})
    console.log(store.getState())
  }
  const setFoodData = () => {
    store.dispatch({
      type: 'SET_FOODS', payload: ['Apple', 'Cherry', 'Banana', 'Tomato']
    })
    console.log(store.getState())
  }
  return (
    <Router>
      <div className="App">
        <button onClick={() => inc()}>Inrement</button>
        <button onClick={() => dec()}>Decrement</button>
        <button onClick={() => addUser()}>Add User</button>
        <button onClick={() => setFoodData()}>setFood Data</button>
        <h1>{count}</h1>
        <div style={{margin: '20px'}}>
          <Link style={{margin: '20px'}} to="/">Home</Link>
          <Link style={{margin: '20px'}} to="/contact">contact</Link>
          <Link style={{margin: '20px'}} to="/gallery">gallery</Link>
          <Link style={{margin: '20px'}} to="/about">about</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <div>Home Page</div>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/gallery">
            <Gallery/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
