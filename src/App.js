import React from 'react';
import './App.css';
// import Buttons from './Button/Buttons';
import AadhaarScanner from './Qr';
import Card1 from './Card';

function App() {

  return (

    <>
    {/* <div className="container d-grid border justify-content-center align-items-center w-25" style={{height:"100vh"}}>
        <h1>Aadhar Scan</h1>
    { !showComponent && <button onClick={handleClick}>Scan</button>}
    
    {showComponent?<AadhaarScanner />:<button onClick={handleClick}>Scan</button>}
</div> */}

      {/* <Buttons/> */}
      {/* <XmlToJsonConverter /> */}
      <Card1 />
      
    </>

  );
}
export default App;
