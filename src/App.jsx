import React from 'react';
import Netflix from './Netflix';
import Amazon from './Amazon';

let fav = prompt("Pick, Netflix or Azon Originals");
const App = () => (
    <>
        <h1 className='heading_style'>List of Top 5 {fav} Picks of 2022</h1>
        {fav === 'Netflix'? <Netflix/>: <Amazon/>}
    </>
);
export default App;