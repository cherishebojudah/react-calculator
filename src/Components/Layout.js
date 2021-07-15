import React from 'react';
import './Layout.css';
import Output from './Output';

const Layout = () => {
    const HandleClick = () => {}

    return (
        <div className='frame'>
            <div className='calculator'>
            <br></br>
            <Output></Output>

            <div className='keys'>
                <input type='button' value={'C'} className='button clear' onClick={HandleClick}></input>
                <input type='button' value={'DEL'} className='button clear' onClick={HandleClick}></input>
                <input type='button' value={'%'} className='button operator' onClick={HandleClick}></input>
                <input type='button' value={'/'} className='button operator' onClick={HandleClick}></input>

                <input type='button' value={'7'} className='button ' onClick={HandleClick}></input>
                <input type='button' value={'8'} className='button ' onClick={HandleClick}></input>
                <input type='button' value={'9'} className='button ' onClick={HandleClick}></input>
                <input type='button' value={'*'} className='button operator' onClick={HandleClick}></input>

                <input type='button' value={'4'} className='button ' onClick={HandleClick}></input>
                <input type='button' value={'5'} className='button ' onClick={HandleClick}></input>
                <input type='button' value={'6'} className='button ' onClick={HandleClick}></input>
                <input type='button' value={'-'} className='button operator' onClick={HandleClick}></input>

                <input type='button' value={'1'} className='button ' onClick={HandleClick}></input>
                <input type='button' value={'2'} className='button ' onClick={HandleClick}></input>
                <input type='button' value={'3'} className='button ' onClick={HandleClick}></input>
                <input type='button' value={'+'} className='button operator' onClick={HandleClick}></input>

                <input type='button' value={'0'} className='button ' onClick={HandleClick}></input>
                <input type='button' value={'.'} className='button ' onClick={HandleClick}></input>
                <input type='button' value={''} className='button ' onClick={HandleClick}></input>
                <input type='button' value={'='} className='button equal-sign' onClick={HandleClick}></input>
            </div>
            
            </div>
        </div>
    )
}

export default Layout;