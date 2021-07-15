import React from 'react';
import OutputRow from './OutputRow';

const Output = props => {
    return (
        <div>
            <OutputRow value={57} textSize={{fontSize: '20px'}}/>
            <OutputRow value={100} textSize={{fontSize: '40px'}}/>
        </div>
    )
}

export default Output;