import React from 'react';
import HelloComponents from '@components/HelloComponents';

const App = () => {
    console.log('hola')
    return (
        <div>
            <h1 style={{color:'red'}}>Hola mundo Cruel...</h1>
            <HelloComponents/>
        </div>
    )
}

export default App
