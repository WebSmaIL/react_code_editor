import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { ViewUpdate } from "@codemirror/view";
import { dracula } from "@uiw/codemirror-theme-dracula";
import styled from "styled-components";
import Settings from "./Settings/Settings";
import { IEditorOptions } from "./interfaces";

const Editor = () => {
  const [code, setCode] = useState<string | undefined>(undefined);
  const handleChangeCode = React.useCallback(
    (value: string, viewUpdate: ViewUpdate) => {
      setCode(value);
    },
    []
  );

  const [editorOptions, setEditorOptions] = useState<IEditorOptions>({
    theme: dracula,
    lang: {id: 1, link: javascript({jsx: true})},
    fontSize: 16
  })

  // const runCode = () => {};

  return (
    <Wrapper>
      <EditorContainer>
        <TitleContainer>
          <Title>Code editor</Title>
        </TitleContainer>
        <EditorMain>
          <CodeMirror
            style={{border: "1px solid #202020", fontSize: editorOptions.fontSize + 'px'}}
            value="console.log('hello world!');"
            height="400px"
            width="600px"
            extensions={[editorOptions.lang.link]}
            onChange={handleChangeCode}
            theme={editorOptions.theme}
            lang="javascript"
          />
          <Settings options={editorOptions} setOptions={setEditorOptions} />
        </EditorMain>
      </EditorContainer>
      <ConsoleContainer></ConsoleContainer>
    </Wrapper>
  );
};
export default Editor;

const Wrapper = styled.div`
  width: fit-content;
  margin: 200px auto;
`;

const EditorContainer = styled.div`
  width: fit-content;
  margin: 200px auto;
  font-size: 16px;
`;

const Title = styled.h3`
  font-size: 14px;
  color: #fff;
  font-family: sans-serif;
  margin: 0;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 25px;
  background: #202020;
  border-radius: 10px 10px 0 0;
  padding: 5px;
  box-sizing: border-box;
`;

const ConsoleContainer = styled.div`
  width: fit-content;
  margin: 200px auto;
  font-size: 16px;
`;



const EditorMain = styled.div`
    display: flex;
`