const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("public"));

var methodOverride = require("method-override");
app.use(methodOverride("_method"));
const allRoutes = require("./routes/allRoutes");
const addUserRoute = require("./routes/addUser");
const bcrypt = require("bcrypt")
const session = require("express-session");
app.use('/public', express.static('public'));

// Auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
const { login } = require("./models/customerSchema");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/index");
  }, 100);
});

mongoose
  .connect(
    "mongodb+srv://abdullahnassan101:Axbxdxox.222@cluster0.yp5tu.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(allRoutes);
app.use( "/user/add.html",addUserRoute);

app.use(
  session({
    secret: "mySuperSecretKey123!@#456", // Gebruik een sterke, unieke sleutel
    resave: false,
    saveUninitialized: true,
  })
);


