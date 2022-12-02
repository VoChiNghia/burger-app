import React from 'react'
import { connect } from 'react-redux'
import parse from 'html-react-parser';

export const Burger = (props) => {
    const {burger} = props.burgerState
    const handle = (option)=> {
        let burgerOption = ""
            for(let i = 0; i < burger[option];i++){
                burgerOption += `<div className=${option}></div>`
            }

            return burgerOption
    }
  return (
    <div className="burger">
    <div className="breadTop"></div>
    {parse(handle('salad'))}
    {parse(handle('cheese'))}
    {parse(handle('beef'))}
    <div className="breadBottom"></div>
    </div>
  )
}

const mapStateToProps = (state) => ({

    burgerState: state.burgerReducer
})



export default connect(mapStateToProps)(Burger)