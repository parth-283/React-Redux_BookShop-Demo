import React from 'react'
import { useDispatch, useSelector} from "react-redux"
import { buyBook } from '../redux';

function HookBookContainer() {
    const numberofBooks = useSelector(state => state.numberOfBook)
    const dispatch =  useDispatch()
    return (
    <div>
        <h1>HookContainer</h1>
        <h2>NumberOFBook = {numberofBooks}</h2>
        <button onClick={()=>dispatch(buyBook())}>BUY BOOK</button>

    </div>
  )
}

export default HookBookContainer