import React from "react";
import ReactDOM from "react-dom";
import SessionExpired from "../components/SessionExpired/SessionExpired";
import axios from "axios";

const api = axios.create({
  baseURL: "https://apipet.pet.inf.ufes.br/"
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.data === "Invalid Token") {
      ReactDOM.render(<SessionExpired />, document.querySelector("#root"));
    } else {
      return Promise.reject(error);
    }
  }
);

export default api;
