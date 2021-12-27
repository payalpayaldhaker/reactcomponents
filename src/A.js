import React, { useState } from 'react'

import B from './B'
import C from './C';
import D from './D';
import E from './E';

 function A() {

    const [X, setX] = useState(['10000'])
    const [Y, setY] = useState(['20000'])
    const [Z, setZ] = useState(['30000'])
    const [P, setP] = useState(['40000'])





    return (
        <>
                <h6>hello eveyone</h6>
                <B name={X}/>
                <C surname={Y}/>
                <D address={Z}/>
                <E type={P}/>
                
                
        </>
    )
}
export default A;
