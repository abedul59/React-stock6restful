import React from "react";
//import './App.css'

const Sign1Detail = (props) => {

  let roundDecimal = function (val, precision) {
    return Math.round(Math.round(val * Math.pow(10, (precision || 0) + 1)) / 10) / Math.pow(10, (precision || 0));
  }
 
  let average6m = roundDecimal((parseFloat(props.stock6data.cna1)+parseFloat(props.stock6data.cna2)+parseFloat(props.stock6data.cna3)+parseFloat(props.stock6data.cna4)+parseFloat(props.stock6data.cna5)+parseFloat(props.stock6data.cna6))/6, 2);
      
return (
    <div>
 

    <div>
        <table>
        <tr><td>營收指標</td></tr>
        <tr>
        <td><h1>{props.stock6data.ca1N}</h1></td>
        <td><h1>{props.stock6data.cna1}</h1></td>
        </tr>

        <tr>
        <td><h1>{props.stock6data.ca2N}</h1></td>
        <td><h1>{props.stock6data.cna2}</h1></td>
        </tr>

        <tr>
        <td><h1>{props.stock6data.ca3N}</h1></td>
        <td><h1>{props.stock6data.cna3}</h1></td>
        </tr>

        <tr>
        <td><h1>{props.stock6data.ca4N}</h1></td>
        <td><h1>{props.stock6data.cna4}</h1></td>
        </tr>

        <tr>
        <td><h1>{props.stock6data.ca5N}</h1></td>
        <td><h1>{props.stock6data.cna5}</h1></td>
        </tr>

        <tr>
        <td><h1>{props.stock6data.ca6N}</h1></td>
        <td><h1>{props.stock6data.cna6}</h1></td>
        </tr>
        

        <tr>
        <td><h1>六個月平均</h1></td>
        <td><h1>{average6m}</h1></td>
        </tr>

        <tr>
        <td><h1>本年1-2月平均</h1></td>
        <td><h1>{props.stock6data.cnluX_MoM}</h1></td>
        </tr>
        </table>

    </div>

    </div>
  );
};
export default Sign1Detail;