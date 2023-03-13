import React from 'react'
import { useGetCryptosQuery } from '../../services/cryptoApi'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { CryptocCrrencies, News} from '../'

const { Title } = Typography

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10)
  const globalStats = data?.data?.stats

  if(isFetching) return 'loading...'
  return (
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row>
        <Col span={12}> <Statistic title="Total Ctryptocurrensies" value={globalStats.total} /></Col>
        <Col span={12}> <Statistic title="Total Exchange" value={globalStats.totalExchanges} /></Col>
        <Col span={12}> <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={12}> <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
        <Col span={12}> <Statistic title="Total Market" value={millify(globalStats.totalMarkets)} /></Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
        <Title level={5} className='show-more'><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <CryptocCrrencies simplified />
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Latest Crypto News</Title>
        <Title level={5} className='show-more'><Link to="/news">Show more</Link></Title>
      </div>
      <News simplified />
    </>
  )
}

export default HomePage