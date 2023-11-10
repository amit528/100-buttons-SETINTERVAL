import React from 'react';
import './App.css';
// import Buttons from './Button/Buttons';
import AadhaarScanner from './Qr';

function App() {

  const [showComponent, setShowComponent] = React.useState(false);

  const handleClick = () => {
    // Update the state to show the component
    setShowComponent(true);
  };

  return (

    <>
    <button onClick={handleClick}>Scan</button>
    
    {showComponent && <AadhaarScanner />}


      {/* <Buttons/> */}
      {/* <XmlToJsonConverter /> */}
    </>

  );
}
export default App;
