import { ButtonGroup } from 'react-bootstrap';
import './style.css';
import React, { useState } from 'react';

export default function ButtonRender({setRender}) { 
  const [activeCanvas, setActiveCanvas] = React.useState(false);  
  const [activeSVG, setActiveSVG] = React.useState(false);  

  function clicouCanvas(){
    setActiveCanvas(state => !state)
    setActiveSVG(false)
    setRender("Canvas")
  }

  function clicouSVG(){
    setActiveSVG(state => !state)
    setActiveCanvas(false)
    setRender("SVG")
  }
  
  return (
    <div>
      <ButtonGroup size="lg" className="ButtonRender">
        {activeCanvas 
          ? <button onClick={clicouCanvas} className="ButtonRenderInputActive">Canvas</button>
          : <button onClick={clicouCanvas} className="ButtonRenderInput">Canvas</button>
        }

        {activeSVG 
          ? <button onClick={clicouSVG} className="ButtonRenderInputActive">SVG</button>
          : <button onClick={clicouSVG} className="ButtonRenderInput">SVG</button>
        }  
      </ButtonGroup>
      
    </div>
  );
}
