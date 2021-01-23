import './main.scss';
import Header from './components/Header';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact.js/Contact';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Switch>
        <Route path='/contact' component={Contact} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/' exact component={Home} />
      </Switch>
      
      <footer>footer</footer>
    </div >
  );
}

export default App;
