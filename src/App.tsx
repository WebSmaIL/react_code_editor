import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { ViewUpdate } from '@codemirror/view';
import { dracula } from "@uiw/codemirror-theme-dracula"

function App() {
  const [code, setCode] = useState<string | undefined>(undefined)
  const onChange = React.useCallback((value: string, viewUpdate: ViewUpdate) => {
    setCode(value)
  }, []);

  const runCode = () => {
    if (code) {
      const newFunc = new Function(code)
      console.log(newFunc())
    }
  }
  return (
    <>
      <CodeMirror
        value="console.log('hello world!');"
        height="400px"
        width="400px"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
        theme={dracula}
      />
      <button onClick={runCode}>run</button>
    </>
  );
}
export default App;