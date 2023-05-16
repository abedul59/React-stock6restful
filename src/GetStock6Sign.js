import React from "react";
//import './App.css'
import {useState, useEffect} from 'react';


const GetStock6Sign = () => {

    const [stock_id, setStock_id] = useState("");
    const [stock_name, setStock_name] = useState("");
    const [newest_season, setNewest_season] = useState("");


    const [stock6data, setStock6data] = useState(""); 

    const [url, setUrl] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setStock_id(stock_id);        
        setUrl(`https://stock6-restfulex.onrender.com/api/Stock6Sign202304/getstockinfo/${stock_id}`);          
        };
          
      

      

const fetchData = () => {        
        console.log(`最新得到網址為${url}`);       
        fetch(url) 
        .then(data => data.json())
        .then(response => {
          const {cStockName, cNewestSeason} = response;
          console.log(cStockName);
          console.log(cNewestSeason);

        setStock_name(cStockName);
        setNewest_season(cNewestSeason);
        setStock6data(response);
        //console.log(`1. 最新得到股票名稱為${event.target.value}`);
        //console.log(`2. 最新得到股票名稱為${stock_id}`);
          
          
        });  
      };

useEffect(fetchData,[url]);

      
return (
    <div>
      <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="stock_id"
        name="stock_id"
        value={stock_id}
        placeholder="stock_id"
        onChange={(event) => {
          setStock_id(event.target.value);
          console.log(`1. 最新股票代號為${event.target.value}`);
          //console.log(`2. 最新股票代號為${stock_id}`);
        }
        }
      />
      <br />
      <br />
      <button type="submit">Submit</button>


    </form>
    </div>

    <div>

        <h1>{stock_id}</h1>
        <h1>{url}</h1>
        <h1>{stock_name}</h1>
        <h1>{newest_season}</h1>
        <h1>{stock6data}</h1>
    </div>
    </div>
  );
};
export default GetStock6Sign;