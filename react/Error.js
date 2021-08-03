import React from 'react'
import Banner from '../Components/Banner'
import Hero from '../Components/Hero'
import {Link} from 'react-router-dom'
const Error = () => {
    return (
        <div>
            <Hero hero="defaultHero">
                <Banner title="404" subtitle="Not found">
                    <Link to="/" className="btn btn-primary">Return Home</Link>
                </Banner>
            </Hero>
        </div>
    )
}

export default Error;