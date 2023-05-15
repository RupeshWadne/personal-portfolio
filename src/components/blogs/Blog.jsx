import React from 'react'
import './blog.css'
import Blogs from './Blogs'

const Blog = () => {
    return (
        <section className="work section" id="blogs">
            <h2 className="section__title">Developer Blogs</h2>
            <span className="section__subtitle">Most recent Blogs</span>

            <Blogs />
        </section>
    )
}

export default Blog
