import React from 'react';

const Card =({confirmed,recovered,deaths})=>{
    return(
        <div>
        <div style={{marginLeft:600}}>
            <h3>Confirmed</h3>
            <p className='card-container' style={{backgroundColor: 'orange',marginRight:650,marginBottom:20,borderWidth:1 , borderRadius:50}}>{confirmed}</p>
        </div>  
        <div>
            <h3>Recovered</h3>
            <p className='card-container' style={{backgroundColor: 'green',marginRight:650,marginBottom:20,borderWidth:1 , borderRadius:50}}>{recovered}</p>
        </div>
        <div>
            <h3>Deaths</h3>
            <p className='card-container' style={{backgroundColor: 'red',marginRight:650,marginBottom:20,borderWidth:1 , borderRadius:50}}>{deaths}</p>
        </div>
        </div>
    )
}

export default Card;