import React from "react";
import { Content, Box } from "./style";

export default function SessionExpired() {
  localStorage.removeItem("LOGINPET_TOKEN");

  return (
    <Box style={{ justifyContent: "center" }}>
      <Content>

        <h3>Sua sessão expirou</h3>
        <a href={window.origin + "/login"}>

        </a>
      </Content>
    </Box>
  );
}
