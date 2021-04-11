import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'

export const MainContent = styled(Container)`
  min-height: 85vh;
  padding: 36px;
  text-align: left;
  box-shadow: -6.22302px -6.22302px 18.6691px rgba(129, 255, 247, 0.13), 6.22302px 6.22302px 18.6691px #000000;
  border-radius: 10px;
  margin-left: 18vw;
  h4{
    margin-left:6px;
  }
`;

export const MarginToggle = styled(Form.Check)`

&:after{
  padding:30px;

}

&:before{
  padding:30px;

}
`

export const LeftContent = styled(Container)`
  box-shadow: -6.22302px -6.22302px 18.6691px rgba(129, 255, 247, 0.13), 6.22302px 6.22302px 18.6691px #000000;
  border-radius: 5px;
`;

