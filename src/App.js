import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Navbar, HomePage, Exchanges, News, CryptocCrrencies, CryptocDetails } from './components';

// Css
import './App.css';
import 'antd/dist/reset.css';

const { Title } = Typography

function App() {
  return (
    <div className="app">
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path="/" element={<HomePage />}></Route>
              <Route path="/exchanges" element={<Exchanges />}></Route>
              <Route path="/cryptocurrencies" element={<CryptocCrrencies />}></Route>
              <Route path="/crypto/:coinId" element={<CryptocDetails />}></Route>
              <Route path="/news" element={<News />}></Route>
            </Routes>
          </div>
        </Layout>
        <div className='footer'>
          <Title level={5} style={{color: 'white', textAlign: 'center'}}>
              Cryptography @2023 <br /> All rights reserved
          </Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
