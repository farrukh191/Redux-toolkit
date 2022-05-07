import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement, incrementByAmount} from './CounterSlice';

const Counter =()=>{
 const countt = useSelector((state)=> state.counter.count)
 const dispatch = useDispatch();
    return(
        <>
        <button className='button' aria-label='Increment button' onClick={()=>{dispatch(increment())}} >+</button>
        <span className='value'>Counter: {countt}</span>
        <button className='button' aria-label='Deccrement button' onClick={()=>{dispatch(decrement())}}>-</button>


        <button className='button' aria-label='Deccrement button' onClick={()=>{dispatch(incrementByAmount(10))}}>
            increment by 10 directly
        </button>

        </>
    );
}

export default Counter;