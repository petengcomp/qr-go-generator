import { ButtonGroup } from 'react-bootstrap';
import './style.css'

import React, { useState } from 'react';

export default function ButtonError({ setError }) {
  const [activeL, setActiveL] = React.useState(false);  
  const [activeM, setActiveM] = React.useState(false);  
  const [activeQ, setActiveQ] = React.useState(false);  
  const [activeH, setActiveH] = React.useState(false); 

  function clicouL(){
    setActiveL(state => !state)
    setActiveM(false)
    setActiveQ(false)
    setActiveH(false)
    setError("L")
  }

  function clicouM(){
    setActiveL(false)
    setActiveM(state => !state)
    setActiveQ(false)
    setActiveH(false)
    setError("M")
  }

  function clicouQ(){
    setActiveL(false)
    setActiveM(false)
    setActiveQ(state => !state)
    setActiveH(false)
    setError("Q")
  }

  function clicouH(){
    setActiveL(false)
    setActiveM(false)
    setActiveQ(false)
    setActiveH(state => !state)
    setError("H")
  }

  return (
    <ButtonGroup size="lg" className="ButtonError">
      {activeL
        ? <button onClick={clicouL} className="ButtonErrorInputActive">L</button>
        : <button onClick={clicouL} className="ButtonErrorInput">L</button>
      }
      {activeM
        ? <button onClick={clicouM} className="ButtonErrorInputActive">M</button>
        : <button onClick={clicouM} className="ButtonErrorInput">M</button> 
      }
      {activeQ
        ? <button onClick={clicouQ} className="ButtonErrorInputActive">Q</button>
        : <button onClick={clicouQ} className="ButtonErrorInput">Q</button>
      }
      {activeH
        ? <button onClick={clicouH} className="ButtonErrorInputActive">H</button>
        : <button onClick={clicouH} className="ButtonErrorInput">H</button>
      }
      
    </ButtonGroup>
  );
}
