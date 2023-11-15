import { useEffect, useState } from 'react';

function App() {
  fetch('/api').then(res=>res.json()).then(data=>console.log(data))
  return (
    <>
      <div></div>
    </>
  );
}

export default App;
