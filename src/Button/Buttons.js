import React, { useEffect, useState } from 'react'
import "./Button.css"

function Buttons() {

    let [intervalId, setIntervalId] = useState(null);
    let [activeButton, setActiveButton] = useState(1);

    const generateRandomColor = () => {
        const red = Math.ceil(Math.random() * 256);
        const green = Math.ceil(Math.random() * 256);
        const blue = Math.ceil(Math.random() * 256);
        return `rgb(${red},${green},${blue})`;
      };


    let [button, setButton] = useState(() =>{
        const buttonArray  = [];

        for(let i=1;i<=100;i++){
            buttonArray.push({
                id: i, 
                isActive:false
            })
        }
        return buttonArray;

    })

    let timer = null;

    const startHandler = () =>{
        let i = activeButton;


        if(intervalId === null){
            timer = setInterval(() =>{

                setIntervalId(timer)

                let activateButtons = button.map((elem) =>{
                    if(elem.id === i){
                        elem.isActive = true
                        setActiveButton(i);

                    } else{
                        elem.isActive = false
                    }
    
                    return elem
                })
    
                setButton(activateButtons)
    
                i++;

                if(i === 101){
                    i=1
                }

            }, 1000)
        } else{
            console.log("not allowed")
        }

    }
    const stopHandler = () =>{
        clearInterval(intervalId)
        setIntervalId(null)
    }

  return<>
  
    <div className="startstop">
    <button onClick={startHandler}>Start</button>
    <button onClick={stopHandler}>Stop</button>
    </div>

  <div className='buttonContainer'>
  {console.log(button)}


        {
            button.map(elem =>{

                return <button className={elem.isActive? "active" : ""} style={{backgroundColor: elem.isActive ? generateRandomColor() : ""}}>{elem.id}</button>
            })
        }

    </div>
  </>
  
}

export default Buttons