import React from 'react'

const Qualification = () => {
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div className="qualification__button button--flex">
                        <i className="uil uil-briefcase-alt"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"></h3>
                                <span className="qualification__subtitle">
                                    S.G.B.A. University.
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2019 - 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
