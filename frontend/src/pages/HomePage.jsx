import React from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";

const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />
        <Hero />
        <Categories />
        <Sponsored />
        <Footer />
    </div>
  )
}

export default HomePage