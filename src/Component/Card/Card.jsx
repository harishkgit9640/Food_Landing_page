import React from 'react'
import card from '../menu';
const Card = (prop) => {
    return (
        <>
            {
                card.map((item) => {
                    return (
                        <div className="card" key={item.id}>
                            <img src={item.image} alt="Card_item" />
                            <div className="card_body">
                                <p className="date">{item.date}</p>
                                <h4>{item.title}</h4>
                                <p className="desc"> {item.description} </p>
                                <button className='btn'>Read More</button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Card
