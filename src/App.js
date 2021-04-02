import React from 'react';
import './App.css';

import Greeter from './components/Greeter';

const nameArray = [
  "Melanie",
  "Emily",
  "Tom",
  "Eddie",
  "Amy",
  "Adam"
]


function App() {
  return (
    <div className="App">
        <h1 className="greeting">Hello I'm Athena!</h1>
        {
          nameArray.map(n => <Greeter key={n} name={n}/>)
        }
    </div>
  );
}

export default App;
