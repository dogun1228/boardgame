const express = require ('express');
const app = express ();
const http = require ('http').Server (app);
const io = require ('socket.io') (http);

app.get ('/', (req, res) => {
  res.sendFile (`${__dirname}\\public\\client.html`);
});

app.use (express.static (`${__dirname}\\public`));

io.on ('connection', socket => {
  console.log ('user connected: ', socket.id);
  const name = `user ${socket.id}`;
  io.to (socket.id).emit ('change name', name);

  socket.on ('disconnect', () => {
    console.log ('user disconnected: ', socket.id);
  });

  socket.on ('send message', (name, text) => {
    const msg = `${name}:${text}`;
    console.log (msg);
    io.emit ('receive message', msg);
  });
});

http.listen (3000, () => {
  console.log ('server on!');
});
