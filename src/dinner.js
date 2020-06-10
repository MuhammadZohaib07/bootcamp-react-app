import React from 'react';

function Dinner() {
    return (
        <div>
            <h1>today i am going to have {props.DishName}</h1>
            <h2>after that i will have {props.SweetDish}</h2>
        </div>
    )
}

export default Dinner;