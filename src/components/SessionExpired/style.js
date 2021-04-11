import styled from "styled-components";

export const Content = styled.div`
  text-align: center;
  -webkit-box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.44);
  box-shadow: 5px 5px 15px -1px rgba(0, 0, 0, 0.44);
  background-color: #212121;
  color: #fff;
  padding: 0 25px;

  img {
    width: 100%;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 5% calc(80vh - 80vw) 5%;
`;
