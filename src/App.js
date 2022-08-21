import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header1';
import Main from './components/Main';
import Gallery from './components/Gallery/Gallery';
import Gallery1 from './components/Gallery1/Gallery1';
import Gallery2 from './components/Gallery2/Gallery2';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <div className="App" id='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/about' component={About} />
          <Route exact path='/membership' component={Gallery} />
          <Route exact path='/gallery1' component={Gallery1} />
          <Route exact path='/gallery2' component={Gallery2} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
