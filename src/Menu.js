import React from 'react';
import { useHistory } from 'react-router-dom';
 
const Menu = () => {
  const history = useHistory();
  const changeRouter = (router) => {
    history.push(router);
  };
 
  return (
    <ul align="center">
      <button onClick={() => changeRouter('/Mainpage')}>主頁</button>
      <button onClick={() => changeRouter('/GetIgBeauty')} >IG</button> 
      <button onClick={() => changeRouter('/GetPttBeauty')}>PTT</button>
      <button onClick={() => changeRouter('/GetStock6Sign')}>Stock6Sign</button>
    </ul>
  )
};
 
export default Menu;