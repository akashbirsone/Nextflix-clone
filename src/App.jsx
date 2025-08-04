import React from 'react'
import Navbar from './Components/navbar';
import CenterImage from './Components/CenterImage';
import TrendingList from './Components/TrendingList'
import PlanSection from './Components/PlanSection'
import FAQSection from './Components/FAQSection'
import Footer from './Components/Footer'


function App() {

  return (
    <main text-xl sm:text-2xl md:text-3xl lg:text-4xl>
      <Navbar />
      <CenterImage />
      <TrendingList />
      <PlanSection />
      <FAQSection />
      <Footer />
    </main>
  )
}

export default App 
