import React from 'react';
import './newhome.css';
const NewHome = props =>{
    console.log(props.token);
    return(
        <div>
            <label>Recently Played</label>
            <div className="div-recently-played">
            </div>
            <label>Suggested</label>
            <div className="div-recently-played">
            </div>
        </div>
    )
}

export default NewHome;