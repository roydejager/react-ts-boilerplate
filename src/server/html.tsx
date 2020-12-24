export default ({ body, styles }: { body: string, styles: string }) => `
  <!DOCTYPE html>
    <head>
      ${styles}
    </head>
    <body>
      <div id="app">${body}</div>
    </body>
    
    <script src="./dist/server.js"></script>
  </html>
`;