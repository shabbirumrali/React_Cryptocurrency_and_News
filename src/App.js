import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Navbar } from './components';

// Css
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Switch>
              <Route exact path="/"><HomePage /></Route>
              <Route path="/exchanges"><Exchanges /></Route>
              <Route path="/cryptocurrencies"><CryptocCrrencies /></Route>
              <Route path="/crypto/:coinId"><CryptocDetails /></Route>
              <Route path="/news"><News /></Route>
            </Switch>
          </div>
        </Layout>
      </div>
      <div className='footer'></div>
    </div>
  );
}

export default App;
