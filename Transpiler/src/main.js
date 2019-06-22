const monaco = require('monaco-editor')
const request = require('xhr-request-promise')

module.exports = () => {
  const transpileButton = document.querySelector('#transpileButton')

  const jsonEditor = monaco.editor.create(document.getElementById('jsonContainer'), {
    value: `
    {
      "dependencies": {
        "body-parser": "^1.19.0",
        "express": "^4.17.1",
        "hard-source-webpack-plugin": "^0.13.1",
        "monaco-editor": "^0.17.0",
        "webpack": "^4.35.0",
        "xhr-request-promise": "^0.1.2"
      }
    }
    `,
    language: 'json'
  })

  const jsEditor = monaco.editor.create(document.getElementById('jsContainer'), {
    value: `
      function hello() {\n\talert('Hello world!');\n}
    `,
    language: 'javascript'
  })

  transpileButton.addEventListener('click', () => {
    const script = jsEditor.getValue()
    const msg = {
      method: 'POST',
      json: true,
      body: { script }
    }
    request('/transpile', msg).then((...args) => {
      console.log(args)
    }).catch((...args) => {
      console.error(args)
    })
  })
}
