import React from 'react'
import Layout from '../components/Layout/Layout'

function HomePage() {
  return (
    <div>
        <Layout  title={"ALl Products - Best offers "}>
        <img
        src="/images/banner.png"
        className="banner-img"
        alt="bannerimage"
        width={"100%"}
      />
      
      <h1>
        HomePage
      </h1>
      </Layout>
    </div>
  )
}

export default HomePage
