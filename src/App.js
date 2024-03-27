import React from "react"

import { HashRouter, Switch, Route } from 'react-router-dom';
import GetPttBeauty from './GetPttBeauty'
import GetIgBeauty from './GetIgBeauty'
import GetStock6Sign2304 from './GetStock6Sign2304'
import GetStock6Sign2308 from './GetStock6Sign2308'
import GetStock6Sign2402 from './GetStock6Sign2402'
import Menu from './Menu'
import Mainpage from './Mainpage'
import './App.css'

function App() {
    return (
        <div>
  <HashRouter>
	  <Menu />
  
	    <Switch>
        <Route path="/mainpage" component={Mainpage} />
	      <Route path="/getigbeauty" component={GetIgBeauty} />
	      <Route path="/getpttbeauty" component={GetPttBeauty} />  
	      <Route path="/getstock6sign2304" component={GetStock6Sign2304} /> 	        
	      <Route path="/getstock6sign2308" component={GetStock6Sign2308} /> 
	      <Route path="/getstock6sign2402" component={GetStock6Sign2402} /> 
	    </Switch>
	  </HashRouter>,
            </div>
)
    }

export default App;
