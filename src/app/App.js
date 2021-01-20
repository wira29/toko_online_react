import {Switch, Route} from 'react-router-dom'
import {Header} from '../component';
import {Home, Product} from '../pages'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={Product} />
      </Switch>
    </div>
  );
}

export default App;
