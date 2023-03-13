import React, { useState } from "react";
import Editor from "./components/Editor/Editor";
import styled from "styled-components";

const App = () => {
  return (
    <MainWrapper>
      <Editor />
    </MainWrapper>
  );
};
export default App;

const MainWrapper = styled.main`
  background: #fff;
`
