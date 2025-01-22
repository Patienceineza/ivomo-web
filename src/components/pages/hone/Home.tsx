import React from 'react'
import Banner from './Banner'
import Recommened from './Recommened'
import News from './News'

const Home = () => {
  return (
    <div className='font-outfit'>
        <Banner/>
        
        <Recommened/>
        <News/>
    </div>
  )
}

export default Home