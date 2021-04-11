import React, { useState, useContext } from 'react'

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ButtonInput, SwitchButton } from '../../GlobalStyles';

import Form from 'react-bootstrap/Form'
import { ChromePicker } from 'react-color';

import ButtonRender from '../../components/ButtonRender/';
import ButtonError from '../../components/ButtonError/';

import './styles.css';
import PDF from '../PDF'
export default function MainContent() {
  const [text, setText] = useState("");
  const [Local, setLocal] = useState(300);
  const [error, setError] = useState("");
  const [render, setRender] = useState("")
  const [colorFront, setColorFront] = useState("#000");
  const [colorBack, setColorBack] = useState("#fff");
  const [value, setValue] = useState();
  const [toggle, setToggle] = useState(true);
  const handleColorChange = ({ hex }) => {
    setColorFront(hex);
  };
  const [checked, setChecked] = useState(false)

  const handleSetTextValue = (text) => {
    setText(text.target.value)
  }

  return (
    <div id="geral">
      <Row id="cont-tam-color">
        <Col id="conteudo" xs={4} >
          <h4>Conteúdo</h4>
          <textarea
            value={text}
            placeholder="Eu sou um QR Code. Leia me"
            onChange={(text) => handleSetTextValue(text)}
          />
        </Col>

        <Col id="dimensoes" xs={2}>
          <div id="margem">
            <h4>Local</h4>
            <input
              type="text"
              name="Local"
              placeholder="Cantina"
              onChange={(text) => setLocal(text.target.value)}
            />
          </div>
          <div id="margem">

            <h4>Margem</h4>
            <SwitchButton
              onChange={setChecked}
              checked={checked}
              offColor='#2D3142'
              onColor='#00B19F'

              uncheckedIcon={false}
              checkedIcon={false}
              height={38}
              width={72}
              handleDiameter={35}
            />
          </div>
        </Col>

        <Col xs={2} id="colors">
          <div >
            <h4>Cor da Frente</h4>
            <ChromePicker
              color={colorFront}
              onChangeComplete={(color) => { setColorFront(color.hex) }}
            />
          </div>
        </Col>
        <Col xs={2} id="colors" >
          <div >

            <h4>Cor do fundo</h4>
            <ChromePicker
              color={colorBack}
              onChangeComplete={(color) => { setColorBack(color.hex) }}
              style={{ backgroundColor: "red" }}
            />

          </div>
        </Col>
      </Row>
      <Row id="render-download">
        <Col xs={3}>
          <div className="instructions-content">
            <h4>Intruções</h4>

            <p>
              Essa página é para facilitar a produção de todos os QR Codes que serão impressos e usados no QR GO.<br /><br />
              Conteúdo - Escolha uma frase para o conteúdo do QR code.<br /><br />
              Local - Escolha o nome do local do QR code.<br /><br />
              Margem - Selecione se deseja colocar uma margem no QR code.<br /><br />
              Cores - Escolha as cores que deseja ter o QR Code (fique atento a cores muito parecidas, pois pode ficar ilegível).
            </p>
          </div>
        </Col>
        <Col xs={3}>
          <div className="ButtonRenderDiv">
            <h4>Renderização</h4>
            <ButtonRender setRender={setRender} />
          </div>
          <br />
          <div>
            <h4>Correção de erro</h4>
            <ButtonError setError={setError} />
          </div>
        </Col>
        <Col xs={3} id="qrCode">
          <h4>Clique na imagem</h4>
          <PDF onChangeContent={(text) => handleSetTextValue(text)} value={text} bgColor={colorBack} fgColor={colorFront} local={Local} margin={checked} error={error} />

        </Col>

      </Row>

    </div>
  )
}