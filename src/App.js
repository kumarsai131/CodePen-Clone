import React, { useEffect, useState } from 'react'
import Editor from './Editor';
import LocalStorage from './LocalStorage'

function App() {

  const [html,setHtml] = LocalStorage('html','')
  const [css,setCss] = LocalStorage('css','')
  const [javascript,setJavascript] = LocalStorage('js','')
  const [srcDoc,setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${javascript}</script>
        </html>
      `)
      }, 250)
      
    return () => clearTimeout(timeout)
  }, [html, css, javascript])

  return(
    <>
      <div className="panel top-panel">
        <Editor language="xml" name="HTML" value={html} onChange = {setHtml}/>
        <Editor language="css" name="CSS" value={css} onChange = {setCss}/>
        <Editor language="javascript" name="JS" value={javascript} onChange = {setJavascript}/>
      </div>

      <div className="panel">
        <iframe srcDoc = {srcDoc} title="output" sandbox="allow-scripts" frameBorder="0" width="100%" height="100%" />
      </div>
    </>
  )
}

export default App;
