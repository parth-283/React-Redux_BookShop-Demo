import React, { useState } from 'react'
import { connect } from 'react-redux';
import { buyBook } from '../redux';

function BookContainer(props) {
    const [number, setNumber] = useState(1)
  return (
    <div>
        <h1>bookContainer</h1>
        <h1>Number OF Books = {props.numberofBooks}</h1>
        <input type="number" value={number} onChange={e=>setNumber(e.target.value)}/>
        <button onClick={()=>props.buyBook(number)}>Buy {number} Books</button>
    </div>
  )
} 

const mapStatetoProps =(state)=>{
    return {
         numberofBooks:state.numberOfBook
    }
}

const mapDispatchProps = (dispatch) => {    
    return{
        buyBook:function(number){
            dispatch(buyBook(number))
        }
    }
}

export default connect(mapStatetoProps,mapDispatchProps) (BookContainer)
