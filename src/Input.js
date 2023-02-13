import React from 'react';
import './Inputm.css'
const Input = (props) => {
    return (
        <div className='list'>
        <button className="d-inline border-dark rounded-circle btn btn-danger"  
            onClick={()=>{
                return props.onSelect(props.id)
        }}> x </button>
        <li className="d-inline" >{props.text}</li>
        </div>
      );
}

export default Input;
