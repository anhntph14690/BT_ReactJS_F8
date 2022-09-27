import React, { useState } from 'react'

interface Props {
    
}

const BaiState = (props: Props) => {

    const [counter, setCounter]: any = useState(1)
    const handleSubmit = () => {
        setCounter(counter + 1)
    }
    return (
        <div className='App'>
            <h1>{counter}</h1>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default BaiState
