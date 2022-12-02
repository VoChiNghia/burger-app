import React from 'react'
import { connect } from 'react-redux'


export const MenuTable = (props) => {
    const {burger,menu} = props.burgerState
    
    
    const handleClickAdd = (option)=>{
       const action = {
            type:"ADD",
            payload: option
        }
        props.dispatch(action)
       
    } 
    const handleClickMinus = (option)=>{
        const action = {
             type:"MINUS",
             payload: option
         }
         props.dispatch(action)
        
     } 

  

  return ( <>
      <div className="menu">
        <table className="table">
            <thead>
                <tr>
                    <th colSpan="2">thức ăn</th>
                    <th >Đơn giá</th>
                    <th>Thành tiền</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>salad</td>
                    <td>
                    <button className="btn btn-primary" onClick={() => handleClickAdd("salad")}>+</button>
                    <span>{burger.salad}</span>
                        <button className="btn btn-danger" onClick={() => handleClickMinus("salad")}>-</button>
                    </td>
                    <td>{menu.salad}</td>
                    <td>{burger.salad * menu.salad}</td>
                </tr>
                <tr>
                    <td>cheese</td>
                    <td>
                    <button className="btn btn-primary" onClick={() => handleClickAdd("cheese")}>+</button>
                    <span>{burger.cheese}</span>
                        <button className="btn btn-danger"  onClick={() => handleClickMinus("cheese")}>-</button>
                    </td>
                    <td>{menu.cheese}</td>
                    <td>{burger.cheese * menu.cheese}</td>
                </tr>
                <tr>
                    <td>beef</td>
                    <td>
                        <button className="btn btn-primary" onClick={() => handleClickAdd("beef")}>+</button>
                        <span>{burger.beef}</span>
                        <button className="btn btn-danger" onClick={() => handleClickMinus("beef")}>-</button>
                    </td>
                    <td>{menu.beef}</td>
                    <td>{burger.beef * menu.beef}</td>
                </tr>
            </tbody>
        </table>
      </div>
  </>
  )
}


const mapStateToProps = (state) => ({
    burgerState: state.burgerReducer,
})



export default connect(mapStateToProps)(MenuTable)