import React from 'react'

const Workitems = ({item}) => {
    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className='work__img' />
            <h3 className="work__title">{item.title}</h3>
            <div className="work__info">
                <a href={item.link1} target='_blank' className="work__button">
                    Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
                <a href={item.link2} target='_blank' className="work__button">
                    Info <i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
            </div>
        </div>
    )
}

export default Workitems
