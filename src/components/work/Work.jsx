import React from 'react'
import './work.css'
import Works from './Works'
import NewWork from './NewWork'

const Work = () => {
    return (
        <section className="work section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most recent works</span>

            {/* <Works /> */}
            <NewWork />
        </section>
    )
}

export default Work
