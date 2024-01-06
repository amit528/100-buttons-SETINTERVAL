import React from 'react';
import './App.css';
// import Buttons from './Button/Buttons';
import Card1 from './Card';
import ContactForm from './Contact';

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
      {/* <Card1 /> */}
      <ContactForm />
    </>

  );
}
export default App;
