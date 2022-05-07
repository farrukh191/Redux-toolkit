import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { chgTxtColot } from './ThemeSlice';
function Theme() {
  const dispatch = useDispatch();
    const [color, setcolor] = useState();
    return (
        <div>
            <input className='textbox' type='text' onChange={(e)=> setcolor(e.target.value)} />
            <button className='button' onClick={()=>{dispatch(chgTxtColot(color))} }>Change text color</button>
            <h1>{color}</h1>
        </div>
    );
}

export default Theme;