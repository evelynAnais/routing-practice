import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
      </div>
      
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
