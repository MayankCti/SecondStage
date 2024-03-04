import React, { useState } from 'react'

function Demo1() {
    const [num, setNum] = useState(0);
    const [num1, setNum1] = useState(100)
    const hello = () => {
        console.log("helo")
    }

    return (
        <>
            <button
                onClick={() => setNum(num + 1)}
            >
                num+
            </button> : <span>
                {num}
            </span>
            <br />
            <button
                onClick={() => setNum1(num1 - 1)}
            >
                num--
            </button> : <span>
                {num1}
            </span>
        </>
    )
}

export default Demo1