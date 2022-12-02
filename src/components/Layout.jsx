import React from 'react'
import Burger from './Burger';
import  MenuTable  from './MenuTable';

const Layout = (props) => {
  return (
    <div className="burger-app conatainer">
       <Burger/>
      <MenuTable/>
    </div>
  )
}

export default Layout