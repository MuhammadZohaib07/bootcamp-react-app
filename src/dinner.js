import React from 'react';

function Dinner(props) {
    return(
        <div>
            <h1>today i will have {props.DishName}</h1>
            <h1>after that i will have {props.SweetDish}</h1>
        </div>
    )
}

export default Dinner;