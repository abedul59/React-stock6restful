import React from "react";
//import './App.css'

const Sign1Detail = (props) => {

      
return (
    <div className="container">

 

    <div  className="sign1card">
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
        

        <tr><React.memo><td><h1>本年1-2月平均</h1></td></React.memo>
        
        <td><h1>{props.stock6data.cnluX_MoM}</h1></td>
        </tr>
        </table>

    </div>

    </div>
  );
};
export default Sign1Detail;