import * as React from 'react';

export default function Html(props, children) {
  const { body, styles, manifest } = props;

  function getFileNames() {
    const scriptFileNames = [];

    Object.keys(manifest).forEach(key => {
      scriptFileNames.push(manifest[key])
    })
    
    return scriptFileNames
  }

  const scripts =  getFileNames().map((src, i) => <script src={src} key={i} />)
  return (
    <html lang="en">
    <head dangerouslySetInnerHTML={{__html: styles}}>
    </head>
    <body>
    <div id="app" dangerouslySetInnerHTML={{__html: body}}></div>
      <script src="/public/js/app.js"></script>
      <script type="application/json" src="/public/js/app.map.js"></script>
    </body>
    </html>
  );
}