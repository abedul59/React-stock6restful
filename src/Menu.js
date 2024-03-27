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
      <button onClick={() => changeRouter('/GetStock6Sign2304')}>Stock6Sign2304</button>
      <button onClick={() => changeRouter('/GetStock6Sign2308')}>Stock6Sign2308</button>
      <button onClick={() => changeRouter('/GetStock6Sign2402')}>Stock6Sign2402</button>
    </ul>
  )
};
 
export default Menu;