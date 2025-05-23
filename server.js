const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');
const connectDB = require('./db');
const routes = require('./routes');
const passport = require('./middlewares/passport');
const cors = require('cors');
const http = require('http'); // Needed to create server for Socket.IO
const socketIo = require('socket.io');
const validateEnv = require('./helpers/validateEnv');
const secretAngelSocket = require("./sockets/secretAngelSocket");
validateEnv();

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);

app.use(passport.initialize());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

connectDB();


app.use('/', routes);

app.get('/api/student', (req, res) => {
    res.json({
        name: "Cynthia Wijaya",
        studentId: "225138694" 
    });
});


const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);
  secretAngelSocket(io, socket);
});


// require('./sockets/secretAngelSocket')(io);


server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
