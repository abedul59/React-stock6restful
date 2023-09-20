import React, {useState} from "react";

import {ThemeProvider} from "styled-components";
import themes from "./themes";

import { HashRouter, Switch, Route } from 'react-router-dom';
import GetPttBeauty from './GetPttBeauty'
import GetIgBeauty from './GetIgBeauty'
import GetStock6Sign2304 from './GetStock6Sign2304'
import GetStock6Sign2308 from './GetStock6Sign2308'
import Menu from './Menu'
import Mainpage from './Mainpage'
import './App.css'

const defaultTheme = Object.keys(themes)[0];

function App() {

	const [selectedTheme, setSelectedTheme] = useState(defaultTheme);


    return (
        <div>
			<ThemeProvider theme = {themes[selectedTheme]}>
  <HashRouter>
	  <Menu />
  
	    <Switch>
        <Route path="/mainpage" component={Mainpage} />
	      <Route path="/getigbeauty" component={GetIgBeauty} />
	      <Route path="/getpttbeauty" component={GetPttBeauty} />  
	      <Route path="/getstock6sign2304" component={GetStock6Sign2304} /> 
	      <Route path="/getstock6sign2308" component={GetStock6Sign2308} /> 		  	        
	    </Switch>
	  </HashRouter>,
	  </ThemeProvider>
            </div>
)
    }

export default App;
