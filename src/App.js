import React, { useState, useEffect } from 'react';


function App() {

  const [name, setName] = useState('Adriano');

  function HandleAddName() {
    setName('Clarinha')
  }

  useEffect(() => {
    console.log('useEffect com dependencia vazia')
  }, [])

  useEffect(() => {
    console.log('useEffect com dependencia [name]')
  }, [name])

  useEffect(() => {
    console.log('useEffect sem dependencia')
  })

  console.log('render')

  return (
    <>
      <h1>{name}</h1>

      <button onClick={HandleAddName}>Add Name</button>
    </>
  );
}

export default App;
