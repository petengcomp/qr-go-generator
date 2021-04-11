import React, { useState } from 'react';
import { MainContent, LeftContent } from './styles';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import QRCode from 'qrcode.react';
import './styles.css';
import { Container } from '../../GlobalStyles';
import { ChromePicker } from 'react-color';
import ReactPDF from '@react-pdf/renderer';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function QrCreate() {
  const [text, setText] = useState("Eu sou um QR Code.Leia me");
  const [tamanho, setTamanho] = useState();

  return (
    <Container>
      <MainContent>
        <Row>
        </Row>
      </MainContent>
      <LeftContent>

      </LeftContent>
    </Container >
  );
}
