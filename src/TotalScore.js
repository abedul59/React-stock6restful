import React from "react";
//import './App.css'

const TotalScore = (props) => {

      
return (
    <div>
 

    <div>
        <table>
        <tr>
        <td><h1>指標1</h1></td>
        <td><h1>{props.stock6data.cSign1}</h1></td>
        </tr>
        <tr>
        <td><h1>指標2</h1></td>
        <td><h1>{props.stock6data.cSign2}</h1></td>
        </tr>
        <tr>
        <td><h1>指標3</h1></td>
        <td><h1>{props.stock6data.cSign3}</h1></td>
        </tr>
        <tr>
        <td><h1>指標4</h1></td>
        <td><h1>{props.stock6data.cSign4}</h1></td>
        </tr>
        <tr>
        <td><h1>指標5</h1></td>
        <td><h1>{props.stock6data.cSign5}</h1></td>
        </tr>
        <tr>
        <td><h1>指標6</h1></td>
        <td><h1>{props.stock6data.cSign6}</h1></td>
        </tr>
        </table>
    </div>
    </div>
  );
};
export default TotalScore;