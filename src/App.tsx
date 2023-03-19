import { Fragment, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import {} from "@tauri-apps/api/os";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`*{margin:0;}`;

const Container = styled.div`
  position: absolute;
  background-color: rgb(50, 50, 50);
  width: 100vw;
  height: 100vh;
`;

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <Fragment>
      <GlobalStyle />
      <Container className="container"></Container>
    </Fragment>
  );
}

export default App;
