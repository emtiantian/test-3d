var express = require('express');

let app = express();
app.use(express.static('../src'));
app.get("/", (req, res) => {
  res.send(index.html)
})
let server = app.listen(8000, () => {
  let host = server.address().address
  let port = server.address().port
  console.log("启动服务器，地址为http://%s:%s", host, port)
})