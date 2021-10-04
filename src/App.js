import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import LearnMore from './components/LearnMore/LearnMore';
import Notfound from './components/Notfound/Notfound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/courses'>
            <Courses></Courses>
          </Route>

          <Route path='/contact'>
            <Contact></Contact>
          </Route>

          <Route path='/about'>
            <About></About>
          </Route>

          <Route path='/learnmore/:abc'>
            <LearnMore></LearnMore>
          </Route>

          <Route path='*'>
            <Notfound></Notfound>
          </Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
