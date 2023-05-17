import React from "react";
//import './App.css'

const Sign2Detail = (props) => {

      
return (
    <div>
 

    <div>
        <table>
        <tr><td>營益率指標</td></tr>
        <tr>
        <td><h1>{props.stock6data.cb1N}</h1></td>
        <td><h1>{props.stock6data.cb1}</h1></td>
        </tr>

        <tr>
        <td><h1>{props.stock6data.cb2N}</h1></td>
        <td><h1>{props.stock6data.cb2}</h1></td>
        </tr>

        <tr>
        <td><h1>{props.stock6data.cb3N}</h1></td>
        <td><h1>{props.stock6data.cb3}</h1></td>
        </tr>

        <tr>
        <td><h1>{props.stock6data.cb4N}</h1></td>
        <td><h1>{props.stock6data.cb4}</h1></td>
        </tr>

        <tr>
        <td><h1>{props.stock6data.cb5N}</h1></td>
        <td><h1>{props.stock6data.cb5}</h1></td>
        </tr>

        <tr>
        <td><h1>{props.stock6data.cb6N}</h1></td>
        <td><h1>{props.stock6data.cb6}</h1></td>
        </tr>
        </table>
    </div>
    </div>
  );
};
export default Sign2Detail;