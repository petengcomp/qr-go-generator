import React, { useState } from 'react';

import { Container } from '../../GlobalStyles';

import MainContent from '../../components/MainContent/'
import Navbar from '../../components/Navbar/';


export default function Generator() {

  return (

    <Container >
      <Navbar />
      <MainContent />
    </Container>
  );
}
