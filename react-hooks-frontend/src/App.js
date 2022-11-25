import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListQuoteComponent from './components/ListQuoteComponent';
import AddQuoteComponent from './components/AddQuoteComponent';

function App() {
  return (
    <div  >
      <Router>
        <HeaderComponent />
        <div className= "container" style = {{color:"black",background:'white',fontWeight:''}}>
          <Switch>
              <Route exact path = "/" component = {ListQuoteComponent}></Route>
              <Route excat path = "/Quotes" component = {ListQuoteComponent}></Route>
              <Route excat path = "/add-Quote" component = {AddQuoteComponent} ></Route>
              <Route excat path = "/edit-Quote/:id" component = {AddQuoteComponent}></Route>
            </Switch>
        </div>
                </Router>
                <FooterComponent />

    </div>
  );
}

export default App;
