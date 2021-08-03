import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import Service from '../Components/Service'
import FeaturedRoom from '../Components/FeaturedRooms'
import {Link} from 'react-router-dom'
function Home() {
    return (
        <div>
            <Hero hero="defaultHero">
                <Banner title="Luxurious rooms" subtitle="Deluxe rooms starting at $299">
                    <Link to="/rooms" className = "btn-primary">
                        Our rooms
                    </Link>
                </Banner>
            </Hero>
            <Service></Service>
            <FeaturedRoom></FeaturedRoom>
        </div>
    )
}

export default Home;