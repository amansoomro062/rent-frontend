import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';

import Footer from './components/Footer';
import Form from './components/Form';
import List from './components/List';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">


<Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Nav />
        <main role="main">

        <section className="jumbotron text-center" >
          <div className="container">
            <h1 className="jumbotron-heading">Liaqat Ali Rent Diary</h1>
            <p className="lead text-muted">This is a complete system to manage the rent business environtment!</p>
            <p>
              
            <Link to="/new" style={{ textDecoration: 'none',color: 'whitesmoke' }}>
              <button className="btn btn-secondary my-2">
                Add new persion
              </button>
            </Link>
            <Link to="/list" style={{ textDecoration: 'none',color: 'whitesmoke' }}>
              <button className="btn btn-primary my-2">
                View List Of Person
              </button>
            </Link>
            </p>
          </div>
        </section>
</main>
          <Switch>
            <Route path="/new">
              <Form />
            </Route>
            <Route path="/list">
              <List />
            </Route>
          </Switch>
          <Footer />

      </Router>

      
    </div>
  );
}

export default App;
