import React from 'react'
import Banner from './components/Banner'
import GetWithUs from './components/GetWithUs'
import PopularApplication from './components/PopularApplication'
import EasyDownload from './components/EasyDownload'
import Articles from './components/Articles'
import FreeTrial from './components/FreeTrial'
import AskedQuestions from './components/AskedQuestions'

const Home = () => {
  return (
    <div>
      <Banner/>
      <GetWithUs/>
      <PopularApplication/>
      {/* <Slider/> */}
      <EasyDownload/>
      <FreeTrial/>
      <AskedQuestions/>
      <Articles/>
    </div>
  )
}

export default Home