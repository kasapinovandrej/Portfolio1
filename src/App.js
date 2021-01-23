import './main.scss';
import Header from './components/Header';
import Home from './Pages/Home/Home';
import PrevExp from './Pages/PrevExp/PrevExp';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact.js/Contact';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <nav>navigation</nav>
      <Route path='/experience' component={PrevExp} />
      <Route path='/contact' component={Contact} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/' exact component={Home} />
      <footer>footer</footer>
    </div >
  );
}

export default App;
