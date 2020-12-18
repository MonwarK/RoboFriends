import React from 'react'

const Card = (props) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 my-3">
            <div className="card">
                <img className="card-img-top" src={"https://robohash.org/"+props.name} alt="Monwar" />
                <div className="card-footer text-center">
                    <h4>{props.name}</h4>
                    <p>{props.email}</p>
                </div>
            </div>
        </div>
        
    )
}

export default Card;