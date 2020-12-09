import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Router>
     <h1>Hi, I am sonu</h1>
    </div>
  );
}

export default App;
