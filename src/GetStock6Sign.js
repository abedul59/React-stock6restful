import React from "react";
//import './App.css'
import {useState, useEffect} from 'react';


const GetStock6Sign = () => {
    const [stock_id, setStock_id] = useState("");
    const [stock_name, setStock_name] = useState("");
    const [url, setUrl] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        //setStock_id(stock_id);
        
        setUrl(`https://stock6-restfulex.onrender.com/api/Stock6Sign202304/${stock_id}`);
        fetch(url) 
        .then(data => data.json())
        .then(response => {
          const {cStockName, cNewestSeason} = response;
          console.log(cStockName);
          console.log(cNewestSeason);
        setStock_name(cStockName);
        
          
          
        });  
    useEffect(handleSubmit, stock_name);   

      }

return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="stock_id"
        name="stock_id"
        value={stock_id}
        placeholder="stock_id"
        onChange={(event) =>
          setStock_id(event.target.value)
        }
      />
      <br />
      <br />
      <button type="submit">Submit</button>


    </form>

    <div>
        <h1>{stock_name}</h1>
    </div>
    </div>
  );
};
export default GetStock6Sign;