//in this page we ll build our rest api
//REST API-API is basically a set of rules that developers create on the server-side to enable programs to communicate with each other. And REST determines how the API will look and work and what architectural pattern developers will follow to build it)
//REST -representational state transfer

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); //to work with serverside in frontend
const UserModel = require("./models/Users");
const app = express();
app.use(cors({ 
  origin: ["https://mern-crud-delta-one.vercel.app/"],
  credentials:[true],
  methods: ['GET','POST','HEAD','PUT','PATCH','DELETE']}));

app.use(express.json()); //when pass data from frontend to backend we parse the data to json format
//run the server

mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete(
    { _id: id }
  )
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running");
});
//mongo db connection
