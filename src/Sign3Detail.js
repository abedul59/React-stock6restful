import React from "react";
//import './App.css'

const Sign3Detail = (props) => {
  let roundDecimal = function (val, precision) {
    return Math.round(Math.round(val * Math.pow(10, (precision || 0) + 1)) / 10) / Math.pow(10, (precision || 0));
  }
  let YoY1 = (parseFloat(props.stock6data.cc1)-parseFloat(props.stock6data.cc2))/parseFloat(props.stock6data.cc2); 

  let YoY1p = roundDecimal(YoY1*100,2).toString() + '%'
return (
    <div>
 

    <div>
        <table>
        <tr><td>稅後淨利指標</td></tr>
        <tr>
        <td><h1>{props.stock6data.cc1N}</h1></td>
        <td><h1>{props.stock6data.cc1}</h1></td>
        </tr>

        <tr>
        <td><h1>{props.stock6data.cc2N}</h1></td>
        <td><h1>{props.stock6data.cc2}</h1></td>
        </tr>

        <tr>
        <td><h1>{props.stock6data.cc3N}</h1></td>
        <td><h1>{props.stock6data.cc3}</h1></td>
        </tr>

        <tr>
        <td><h1>{props.stock6data.cc4N}</h1></td>
        <td><h1>{props.stock6data.cc4}</h1></td>
        </tr>

        <tr>
        <td><h1>{props.stock6data.cc5N}</h1></td>
        <td><h1>{props.stock6data.cc5}</h1></td>
        </tr>

        <tr>
        <td><h1>{props.stock6data.cc6N}</h1></td>
        <td><h1>{props.stock6data.cc6}</h1></td>
        </tr>
        

        <tr>
        <td><h1>y最新一季YoY</h1></td>
        <td><h1>{YoY1p}</h1></td>
        </tr>
        </table>

    </div>

    </div>
  );
};
export default Sign3Detail;