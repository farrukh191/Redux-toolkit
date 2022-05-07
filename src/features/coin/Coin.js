import React from 'react';
import { useSelector } from 'react-redux';

function Coin(props) {
    const coins = useSelector((state)=> state.counter.count)
    const chgtxtclr = useSelector((state)=> state.color.color)
    return (
        <div>
             <span className='value' style={{color:chgtxtclr}}>Coins: {coins}</span>
        </div>
    );
}

export default Coin;