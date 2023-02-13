import React, { useState } from "react";
import Input from "./Input";
import './Maindiv.css'
const Maindiv = () => {
  const [value, setValue] = useState("");
  const [arr, setarr] = useState([]);

  const changeText = (event) => {
    setValue(event.target.value);
  };

  const display = () => {
    setarr((previous) => {
      if(value.trim() !=(""))
      return [...previous,value];
      else 
      return [...previous]
    });
    setValue("");
  };

  const deleteItem = (id) => {
    setarr((previous) => {
      return previous.filter((currvalue, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className=" container container-fluid mt-5 ">
        <div className="container w-50  mh-100 border border-dark  m-top-5 rounded mainctn">
          <br />
          <center>
            <h1 className=" border border-dark rounded my-3 ">To Do List</h1>
          </center>
          <input
            type="text"
            className="form-control textbox"
            onChange={changeText}
            value={value}
            placeholder="Add a Item"
          />
          <button className="btn btn-success button" onClick={display}>+</button>
          <ol>
            {arr.map((data, index) => {
              return(
                <Input onSelect={deleteItem} text={data} id={index} />
                );
            })}
          </ol>
          <br />
        </div>
      </div>
    </>
  );
};

export default Maindiv;
