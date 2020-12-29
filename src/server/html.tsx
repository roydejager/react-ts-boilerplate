import React from 'react';

export default function Html(props, children) {
  const { body, styles } = props;
  
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